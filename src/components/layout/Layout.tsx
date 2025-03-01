import { FC, JSX } from 'react';
import styles from './Layout.module.css';

type LayoutProps = {
  children: JSX.Element;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className={styles.layout}>
      <div className={styles.content}>{children}</div>
    </main>
  );
};
