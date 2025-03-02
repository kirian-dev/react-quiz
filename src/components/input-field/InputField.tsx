import { FC, InputHTMLAttributes } from 'react';
import styles from './InputField.module.css';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string | null;
}

export const InputField: FC<InputFieldProps> = ({
  error,
  className,
  ...props
}) => {
  return (
    <div className={styles.container}>
      <input
        {...props}
        className={`${styles.input} ${error ? styles.error : ''} ${className || ''}`}
      />
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};
