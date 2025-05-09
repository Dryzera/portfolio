import AOS from 'aos';

import 'aos/dist/aos.css';
import './styles/globalApp.css';
import HomePage from './pages/HomePage';

AOS.init();

function App() {
  return <HomePage />;
}

export default App;
