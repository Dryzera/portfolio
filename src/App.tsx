import { AboutMe } from './components/AboutMe';
import { Header } from './components/Header';
import AOS from 'aos';

import 'aos/dist/aos.css';
import './styles/globalApp.css';

AOS.init();

function App() {
  return (
    <>
      <Header />
      <AboutMe />
    </>
  );
}

export default App;
