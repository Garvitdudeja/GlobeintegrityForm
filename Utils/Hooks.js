import { useEffect, useState } from 'react';

export const useRecaptcha = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkRecaptcha = () => {
      if (typeof window !== 'undefined' && window.grecaptcha && window.grecaptcha.ready) {
        window.grecaptcha.ready(() => {
          setIsReady(true);
        });
      } else {
        // Retry after a short delay
        setTimeout(checkRecaptcha, 100);
      }
    };

    checkRecaptcha();
  }, []);

  const executeRecaptcha = async (action) => {
    if (!isReady || !window.grecaptcha) {
      throw new Error('reCAPTCHA not ready');
    }

    try {
      const token = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        { action }
      );
      return token;
    } catch (error) {
      console.error('reCAPTCHA execution failed:', error);
      throw error;
    }
  };

  return { isReady, executeRecaptcha };
};