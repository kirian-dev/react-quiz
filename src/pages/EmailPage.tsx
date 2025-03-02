import { Title } from '@/components/title';
import { Button } from '@/components/button';
import { useTranslation } from 'react-i18next';
import { useEmailValidator } from '@/hooks/useEmailValidation';
import { FC, useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuizStorageService } from '@/services/QuizStorageService';
import { InputField } from '@/components/input-field';

export const EmailPage: FC = () => {
  const { t } = useTranslation('quiz');
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const { error, setIsTouched } = useEmailValidator(email);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const navigateToThankYouPage = () => {
    try {
      QuizStorageService.saveEmail(email);
      navigate('/thank-you');
    } catch (err) {
      console.log('Failed to save email', err);
    }
  };

  return (
    <main className="full-screen d-flex-column">
      <div className="content">
        <Title>{t('email.title')}</Title>
        <h2 className="subtitle">{t('email.subtitle')}</h2>

        <InputField
          type="email"
          name="email"
          placeholder={t('email.placeholder')}
          value={email}
          error={error}
          className="m-top-large"
          onChange={handleEmailChange}
          onBlur={() => setIsTouched(true)}
        />

        <p className="m-top-large privacy-text">
          {t('email.termsPolicy')}
          <a href="#" className="text-color-pink">
            {t('email.privacy')}
          </a>{' '}
          {t('and')}
          <a href="#" className="text-color-pink">
            {t('email.terms')}
          </a>
        </p>
      </div>

      <Button
        isDisabled={Boolean(error) || !email}
        onClick={navigateToThankYouPage}
      >
        {t('buttonNext')}
      </Button>
    </main>
  );
};
