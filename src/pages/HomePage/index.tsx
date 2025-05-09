import { AboutMe } from '../../components/AboutMe';
import { Home } from '../../components/Home';
import DefaultTemplate from '../../templates/DefaultTemplate';

export default function HomePage() {
  return (
    <DefaultTemplate>
      <Home />
      <AboutMe />
    </DefaultTemplate>
  );
}
