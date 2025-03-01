import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { QuizStorageService } from '@/services/QuizStorageService';
import { THANK_YOU_QUESTIONS } from '@/lib/consts';

export const useDownloadQuizAnswers = () => {
  const { t } = useTranslation('quiz');

  return useCallback(() => {
    try {
      const answers: Record<string, string | string[]> =
        QuizStorageService.getAnswers();
      const email = QuizStorageService.getEmail() || '';

      const csvRows = ['order,title,type,answer'];

      THANK_YOU_QUESTIONS.forEach(({ order, title, type, key }) => {
        let answer = answers[key] || '';
        if (Array.isArray(answer)) {
          answer = answer.map((a) => t(a)).join(', ');
        } else {
          answer = t(answer);
        }
        if (key === 'email') answer = email;

        csvRows.push(`${order},"${t(title)}",${type},"${answer}"`);
      });

      const blob = new Blob([csvRows.join('\n')], {
        type: 'text/csv;charset=utf-8;',
      });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = 'quiz_answers.csv';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Failed to download quiz answers:', err);
    }
  }, [t]);
};
