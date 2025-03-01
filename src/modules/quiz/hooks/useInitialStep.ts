import { useMemo } from 'react';
import { QuizStorageService } from '@/services/QuizStorageService';
import { FIRST_QUESTION_PAGE } from '@/lib/consts';

export const useInitialStep = () => {
  return useMemo(() => {
    try {
      return QuizStorageService.getProgress() || FIRST_QUESTION_PAGE;
    } catch (error) {
      console.error('Failed to get quiz progress:', error);
      return FIRST_QUESTION_PAGE;
    }
  }, []);
};
