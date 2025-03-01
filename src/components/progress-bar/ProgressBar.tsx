import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProgressBar.module.css';

type ProgressBarProps = {
  currentStep: number;
  totalSteps: number;
};

export const ProgressBar: FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
}) => {
  const navigate = useNavigate();
  const progressPercentage = (currentStep / totalSteps) * 100;
  const isShowBackButton = currentStep > 1;

  return (
    <div className={styles.progressContainer}>
      {isShowBackButton && (
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          ←
        </button>
      )}
      <div
        className={styles.progressBar}
        style={{ width: `${progressPercentage}%` }}
      />

      <span className={styles.progressText}>
        {currentStep}
        <span className={styles.defaultText}>/{totalSteps}</span>
      </span>
    </div>
  );
};
