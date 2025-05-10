import AOS from 'aos';

import 'aos/dist/aos.css';
import './styles/globalApp.css';
import HomePage from './pages/HomePage';
import { GeneralContextProvider } from './contexts/GeneralContext/GeneralContextProvider';

AOS.init();

function App() {
  return (
    <GeneralContextProvider>
      <HomePage />
    </GeneralContextProvider>
  );
}

export default App;
