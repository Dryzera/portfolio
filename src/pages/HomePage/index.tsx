import { AboutMe } from '../../components/AboutMe';
import { Contacts } from '../../components/Contacts';
import { Home } from '../../components/Home';
import DefaultTemplate from '../../templates/DefaultTemplate';
import { MyTecnologies } from '../../components/MyTecnologies';

export default function HomePage() {
  return (
    <DefaultTemplate>
      <Home />
      <AboutMe />
      <Contacts title='Vamos Conversar' />
      <MyTecnologies />
    </DefaultTemplate>
  );
}
