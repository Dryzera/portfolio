import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import HomePage from '../../pages/HomePage';
import { useEffect } from 'react';
import { useGeneralContext } from '../../contexts/GeneralContext/useGeneralContext';
import ContactPage from '../../pages/ContactPage';
import NotFound from '../../pages/NotFound';
import ProjectsPage from '../../pages/ProjectsPage';

function ScrollToTop() {
  const { setState } = useGeneralContext();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setState(prevState => {
      return {
        ...prevState,
        actualPage: pathname,
      };
    });
  }, [setState, pathname]);

  return null;
}

export function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contacts' element={<ContactPage />} />
        <Route path='/projects' element={<ProjectsPage />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
