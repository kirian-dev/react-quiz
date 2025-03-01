import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { QuizPage } from '@/pages/QuizPage';
import { EmailPage } from '@/pages/EmailPage';
import { ThankYouPage } from '@/pages/ThankYouPage';
import { PageNotFound } from '@/pages/NotFound';
import { useInitialStep } from '@/modules/quiz/hooks/useInitialStep';

export const AppRoutes = () => {
  const initialStep = useInitialStep();

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={`/quiz/${initialStep}`} replace />}
        />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/email" element={<EmailPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
};
