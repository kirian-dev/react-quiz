import { FC, ReactNode } from 'react';
import styles from './Title.module.css';

type TitleProps = {
  children: ReactNode;
  className?: string;
};
export const Title: FC<TitleProps> = ({ children, className = '' }) => {
  return <h1 className={`${styles.title} ${className}`}>{children}</h1>;
};
