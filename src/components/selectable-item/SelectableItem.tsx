import { ReactNode, useState } from 'react';
import styles from './SelectableItem.module.css';
import { Checkbox } from '@/components/checkbox';
import clsx from 'clsx';

type SelectableItemProps<T> = {
  item: T;
  children: ReactNode;
  hasCheckbox?: boolean;
  isChecked?: boolean;
  isBubble?: boolean;
  isSelected?: boolean;
  option?: { emoji?: string };
  onClick: (item: T) => void;
  className?: string;
};

export const SelectableItem = <T,>({
  item,
  children,
  hasCheckbox,
  isChecked,
  isBubble,
  isSelected,
  option,
  onClick,
  className,
}: SelectableItemProps<T>) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (hasCheckbox || isBubble) {
      onClick(item);
      return;
    }

    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        onClick(item);
        setIsAnimating(false);
      }, 500);
    }
  };

  return isBubble ? (
    <li
      className={clsx(
        styles.topicCard,
        { [styles.selected]: isSelected },
        className,
      )}
      onClick={handleClick}
    >
      {option?.emoji && <span className={styles.emoji}>{option.emoji}</span>}
      <span className={styles.name}>{children}</span>
    </li>
  ) : (
    <li className={clsx(styles.block, className)}>
      <label
        className={clsx(
          styles.label,
          hasCheckbox && styles.labelWithCheckbox,
          isAnimating && styles.animate,
        )}
        onClick={handleClick}
      >
        {children}
        {hasCheckbox && <Checkbox checked={!!isChecked} />}
      </label>
    </li>
  );
};
