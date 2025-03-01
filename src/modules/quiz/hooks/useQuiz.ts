import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { QuizStorageService } from '@/services/QuizStorageService';
import * as consts from '../consts';

export const useQuiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState(false);

  const questionIndex = useMemo(() => {
    const index = Number(id) - 1;
    return index >= consts.FIRST_STEP_INDEX && index < consts.TOTAL_STEPS
      ? index
      : consts.NOT_FOUND_INDEX;
  }, [id]);

  useEffect(() => {
    try {
      if (questionIndex !== consts.NOT_FOUND_INDEX) {
        QuizStorageService.saveProgress(questionIndex + 1);
      } else {
        navigate(`${consts.QUIZ_BASE_PATH}/1`, { replace: true });
      }
    } catch (error) {
      console.error('Failed to save progress or navigate:', error);
    }
  }, [questionIndex, navigate]);

  const handleAnswer = useCallback(
    (answer: string | string[]) => {
      if (questionIndex === consts.NOT_FOUND_INDEX) return;

      try {
        QuizStorageService.saveAnswer(questionIndex, answer);
        const nextStepIndex = questionIndex + consts.NEXT_STEP_OFFSET;
        const isLastStep = nextStepIndex > consts.TOTAL_STEPS;

        if (isLastStep) {
          setShowLoader(true);
        } else {
          navigate(`${consts.QUIZ_BASE_PATH}/${nextStepIndex}`);
        }
      } catch (error) {
        console.error('Failed to save answer or navigate:', error);
      }
    },
    [questionIndex, navigate],
  );

  const handleCompleteLoader = useCallback(() => {
    try {
      navigate(consts.EMAIL_PATH, { replace: true });
      setShowLoader(false);
    } catch (error) {
      console.error('Failed to navigate to email path:', error);
    }
  }, [navigate]);

  return {
    questionIndex,
    showLoader,
    handleAnswer,
    handleCompleteLoader,
  };
};
