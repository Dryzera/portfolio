import { useEffect, useState } from 'react';
import { useGeneralContext } from '../contexts/GeneralContext/useGeneralContext';
import en from '../strings/en.json';
import pt from '../strings/pt.json';

export function useLanguage() {
  const { state } = useGeneralContext();
  const [language, setLanguage] = useState(pt);

  useEffect(() => {
    if (state.language === 'en') {
      setLanguage(en);
    } else {
      setLanguage(pt);
    }
  }, [state.language]);

  return language;
}
