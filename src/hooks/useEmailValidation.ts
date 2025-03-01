import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DEBOUNCE_DELAY = 300;

export const useEmailValidator = (email: string) => {
  const { t } = useTranslation('quiz');
  const [error, setError] = useState<string | null>(null);
  const [isTouched, setIsTouched] = useState(false);

  const validateEmail = useCallback(
    (value: string) => {
      if (!value) return t('emailRequired');
      return EMAIL_REGEX.test(value) ? null : t('invalidEmail');
    },
    [t],
  );

  useEffect(() => {
    if (!isTouched) return;

    const handler = setTimeout(() => {
      setError(validateEmail(email));
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(handler);
  }, [email, validateEmail, isTouched]);

  return { error, setIsTouched };
};
