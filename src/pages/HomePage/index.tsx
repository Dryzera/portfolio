import { AboutMe } from '../../components/AboutMe';
import { Contacts } from '../../components/Contacts';
import { Home } from '../../components/Home';
import DefaultTemplate from '../../templates/DefaultTemplate';
import { MyTecnologies } from '../../components/MyTecnologies';
import { HomeProjects } from '../../components/HomeProjects';
import { useEffect } from 'react';
import { useLanguage } from '../../hooks/useLanguge';

export default function HomePage() {
  useEffect(() => {
    document.title = 'Endryus Daniel';
  }, []);
  const language = useLanguage();

  return (
    <DefaultTemplate>
      <Home />
      <AboutMe />
      <HomeProjects />
      <MyTecnologies />
      <Contacts title={language['go-talkie-title']} />
    </DefaultTemplate>
  );
}
