import { FC, useEffect, useState } from 'react';
import styles from './Loader.module.css';

type LoaderProps = {
  onComplete: () => void;
  text?: string;
};

export const Loader: FC<LoaderProps> = ({ text, onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={styles.loaderContainer}>
      <div className={styles.progressCircle}>
        <svg viewBox="0 0 100 100" className={styles.svgCircle}>
          <circle cx="50" cy="50" r="45" className={styles.backgroundCircle} />
          <circle
            cx="50"
            cy="50"
            r="45"
            className={styles.foregroundCircle}
            style={{
              strokeDashoffset: 283 - (283 * progress) / 100,
            }}
          />
        </svg>
        <div className={styles.progressText}>{progress}%</div>
      </div>
      <p className={styles.loadingText}>{text}</p>
    </div>
  );
};
