import { FC } from 'react';
import { useQuizStep } from '../hooks/useQuizStep';
import { Title } from '@/components/title';
import { Button } from '@/components/button';
import styles from './QuizStep.module.css';
import { OptionsList } from './OptionsList';
import { QuizType } from '../types';

type QuizStepProps = {
  stepIndex: number;
  onNext: (value: string | string[]) => void;
};

export const QuizStep: FC<QuizStepProps> = ({ stepIndex, onNext }) => {
  const { t, step, selected, handleSelection, handleLanguageChange } =
    useQuizStep(stepIndex, onNext);

  if (!step) return null;

  return (
    <div className={styles.stepWrapper}>
      <div>
        <Title>{t(step.title)}</Title>
        {step.subtitle && (
          <h2 className="subtitle m-btm">{t(step.subtitle)}</h2>
        )}

        <OptionsList
          options={step.options || step.singleOptions || []}
          selected={selected}
          isStepOne={step.key === 'step1'}
          handleSelection={handleSelection}
          handleLanguageChange={handleLanguageChange}
          t={t}
          hasCheckbox={step.type === QuizType.multiple}
          customRender={step.customRender}
          isBubble={step.type === QuizType.bubble}
        />
      </div>
      {step.type !== QuizType.single && (
        <div className={styles.buttonWrapper}>
          <Button
            onClick={() => onNext(selected)}
            isDisabled={selected.length === 0}
          >
            {t('buttonNext')}
          </Button>
        </div>
      )}
    </div>
  );
};
