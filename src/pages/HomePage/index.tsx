import { useEffect } from 'react';
import { AboutMe } from '../../components/AboutMe';
import { Contacts } from '../../components/Contacts';
import { Home } from '../../components/Home';
import { useGeneralContext } from '../../contexts/GeneralContext/useGeneralContext';
import DefaultTemplate from '../../templates/DefaultTemplate';
import { MyTecnologies } from '../../components/MyTecnologies';

export default function HomePage() {
  const { setState } = useGeneralContext();

  useEffect(() => {
    setState(prevState => {
      return {
        ...prevState,
        actualPage: '/',
      };
    });
  }, []); // eslint-disable-line

  return (
    <DefaultTemplate>
      <Home />
      <AboutMe />
      <MyTecnologies />
      <Contacts title='Vamos Conversar' />
    </DefaultTemplate>
  );
}
