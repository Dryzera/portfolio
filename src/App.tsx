import AOS from 'aos';

import 'aos/dist/aos.css';
import './styles/globalApp.css';
import { MainRoutes } from './routes/MainRoute';
import { GeneralContextProvider } from './contexts/GeneralContext/GeneralContextProvider';
import { MessagesComponent } from './components/MessagesComponent';

AOS.init({
  once: true,
});

function App() {
  return (
    <GeneralContextProvider>
      <MessagesComponent />
      <MainRoutes />
    </GeneralContextProvider>
  );
}

export default App;
