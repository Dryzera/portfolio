import { AboutMe } from '../../components/AboutMe';
import { Contacts } from '../../components/Contacts';
import { Home } from '../../components/Home';
import DefaultTemplate from '../../templates/DefaultTemplate';
import { MyTecnologies } from '../../components/MyTecnologies';
import { HomeProjects } from '../../components/HomeProjects';

export default function HomePage() {
  return (
    <DefaultTemplate>
      <Home />
      <AboutMe />
      <HomeProjects />
      <MyTecnologies />
      <Contacts title='Vamos Conversar' />
    </DefaultTemplate>
  );
}
