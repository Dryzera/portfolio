import { useEffect } from 'react';
import { Contacts } from '../../components/Contacts';
import DefaultTemplate from '../../templates/DefaultTemplate';
import { useGeneralContext } from '../../contexts/GeneralContext/useGeneralContext';

export default function HomePage() {
  const { setState } = useGeneralContext();

  useEffect(() => {
    setState(prevState => {
      return {
        ...prevState,
        actualPage: 'contacts',
      };
    });
  }, []); // eslint-disable-line

  return (
    <DefaultTemplate>
      <Contacts title='Quer Falar Comigo' />
    </DefaultTemplate>
  );
}
