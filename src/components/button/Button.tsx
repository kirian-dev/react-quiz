import { FC, ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';
import clsx from 'clsx';

enum Variant {
  primary = 'primary',
}

enum Size {
  medium = 'medium',
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
  isDisabled?: boolean;
};

export const Button: FC<ButtonProps> = ({
  children,
  variant = Variant.primary,
  size = Size.medium,
  isLoading = false,
  isDisabled = false,
  className,
  ...restProps
}) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        { [styles.disabled]: isDisabled },
        className,
      )}
      disabled={isDisabled}
      {...restProps}
    >
      {isLoading ? 'Loading...' : <>{children}</>}
    </button>
  );
};
