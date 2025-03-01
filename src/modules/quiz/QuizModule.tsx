import { ProgressBar } from '@/components/progress-bar';
import { Loader } from '@/components/loader';
import { QuizStep } from './components/QuizStep';
import { useQuiz } from './hooks/useQuiz';
import { quizSteps } from './config';
import { LOADER_TEXT, QUESTION_NOT_FOUND, TOTAL_STEPS } from './consts';

export const QuizModule = () => {
  const { questionIndex, showLoader, handleAnswer, handleCompleteLoader } =
    useQuiz();

  const currentStepData = quizSteps[questionIndex];

  if (showLoader) {
    return <Loader text={LOADER_TEXT} onComplete={handleCompleteLoader} />;
  }

  if (!currentStepData) return <p>{QUESTION_NOT_FOUND}</p>;

  return (
    <>
      <ProgressBar currentStep={questionIndex + 1} totalSteps={TOTAL_STEPS} />
      <QuizStep stepIndex={questionIndex} onNext={handleAnswer} />
    </>
  );
};
