import { useEffect } from 'react';
import { Contacts } from '../../components/Contacts';
import DefaultTemplate from '../../templates/DefaultTemplate';

export default function HomePage() {
  useEffect(() => {
    document.title = 'Contatos - Endryus Daniel';
  }, []);

  return (
    <DefaultTemplate>
      <Contacts title='Quer Falar Comigo' />
    </DefaultTemplate>
  );
}
