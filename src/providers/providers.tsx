import { ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter as Router } from 'react-router-dom';
import i18n from '../localization/i18n';

const ErrorFallback = () => {
  return (
    <div className="" role="alert">
      <h2 className="">Something went wrong</h2>
      <button
        className=""
        onClick={() => window.location.assign(window.location.origin)}
      >
        Reload page
      </button>
    </div>
  );
};

interface MainProviderProps {
  children: ReactNode;
}

export const MainProvider = ({ children }: MainProviderProps) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Router>{children}</Router>
        </ErrorBoundary>
      </Suspense>
    </I18nextProvider>
  );
};
