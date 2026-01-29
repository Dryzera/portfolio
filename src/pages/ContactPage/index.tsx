import { useEffect } from 'react';
import { Contacts } from '../../components/Contacts';
import DefaultTemplate from '../../templates/DefaultTemplate';
import { useLanguage } from '../../hooks/useLanguge';

export default function HomePage() {
  useEffect(() => {
    document.title = 'Contatos - Endryus Daniel';
  }, []);
  const language = useLanguage();

  return (
    <DefaultTemplate>
      <Contacts title={language['want-talk-me-title']} />
    </DefaultTemplate>
  );
}
