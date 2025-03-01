import { useReducer, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { quizSteps } from '../config';
import { QuizType } from '../types';
import i18next from 'i18next';
import { MIN_SELECTED_ITEMS } from '../consts';
import { getLastStepOptions } from '../utils';
import { QuizStorageService } from '@/services/QuizStorageService';

const SELECT = 'SELECT';
const DESELECT = 'DESELECT';
const RESET = 'RESET';

const selectionReducer = (
  state: string[],
  action: { type: string; payload?: string },
) => {
  switch (action.type) {
    case SELECT:
      return action.payload && !state.includes(action.payload)
        ? [...state, action.payload]
        : state;
    case DESELECT:
      return state.filter((item) => item !== action.payload);
    case RESET:
      return [];
    default:
      return state;
  }
};

export const useQuizStep = (
  stepIndex: number,
  onNext: (value: string | string[]) => void,
) => {
  const { t } = useTranslation('quiz');
  const currentStep = quizSteps[stepIndex];

  const step = useMemo(
    () => ({
      ...currentStep,
      options:
        currentStep?.key === 'step5'
          ? getLastStepOptions()
          : currentStep?.options,
    }),
    [currentStep],
  );
  const [selected, dispatch] = useReducer(selectionReducer, []);

  useEffect(() => {
    dispatch({ type: RESET });
  }, [stepIndex]);

  const handleSelection = (option: string) => {
    if (step?.type === QuizType.single) {
      return onNext(option);
    }

    if (selected.includes(option)) {
      return dispatch({ type: DESELECT, payload: option });
    }

    if (selected.length < (step?.maxSelection || MIN_SELECTED_ITEMS)) {
      dispatch({ type: SELECT, payload: option });
    }
  };

  const handleLanguageChange = (lang: string) => {
    if (!lang) return;
    try {
      QuizStorageService.saveLanguage(lang);
      i18next.changeLanguage(lang).then(() => handleSelection(lang));
    } catch (err) {
      console.error('Error changing language:', err);
    }
  };

  return { t, step, selected, handleSelection, handleLanguageChange };
};
