import { FC } from 'react';
import styles from './Checkbox.module.css';

type CheckboxProps = {
  checked: boolean;
  onChange?: () => void;
};

export const Checkbox: FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <div
      className={`${styles.checkbox} ${checked ? styles.checked : ''}`}
      onClick={onChange}
    >
      {checked && <span className={styles.checkmark}>✔</span>}
    </div>
  );
};
