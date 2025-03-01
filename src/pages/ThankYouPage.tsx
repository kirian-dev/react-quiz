import { useTranslation } from 'react-i18next';
import { Button } from '../components/button';
import { Title } from '@/components/title';
import checkIcon from '@/assets/check-success.svg';
import downloadIcon from '@/assets/download.svg';
import { QuizStorageService } from '@/services/QuizStorageService';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { useDownloadQuizAnswers } from '@/hooks/useDownloadQuizAnswers';

export const ThankYouPage: FC = () => {
  const { t } = useTranslation('quiz');
  const navigate = useNavigate();
  const handleDownloadAnswers = useDownloadQuizAnswers();

  const handleRetakeQuiz = () => {
    try {
      QuizStorageService.clearAllData();
      navigate('/quiz/1');
    } catch (err) {
      console.log('Failed to clear data', err);
    }
  };

  return (
    <main className="full-screen">
      <section className="content">
        <Title className="m-btm-none">{t('thankYou.title')}</Title>
        <p>{t('thankYou.message')}</p>
        <div className="m-top-large">
          <img src={checkIcon} alt="Success" />
        </div>
      </section>

      <div className="full-width d-flex-center">
        <button className="d-flex" onClick={handleDownloadAnswers}>
          <img src={downloadIcon} alt="Download" />
          <span>{t('thankYou.downloadAnswers')}</span>
        </button>
        <Button onClick={handleRetakeQuiz}>{t('thankYou.button')}</Button>
      </div>
    </main>
  );
};
