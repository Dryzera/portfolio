import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import HomePage from '../../pages/HomePage';
import { useEffect } from 'react';
import { useGeneralContext } from '../../contexts/GeneralContext/useGeneralContext';
import ContactPage from '../../pages/ContactPage';
import NotFound from '../../pages/NotFound';
import ProjectsPage from '../../pages/ProjectsPage';
import ProjectPage from '../../pages/ProjectPage';
import BlogPage from '../../pages/BlogPage';

function ScrollToTop() {
  const { setState } = useGeneralContext();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
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
  const { setState } = useGeneralContext();

  useEffect(() => {
    const isPortuguese = navigator.language.toLowerCase().startsWith('pt-br');
    setState(prevState => {
      return { ...prevState, language: isPortuguese ? 'pt' : 'en' };
    });
  }, [setState]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contacts' element={<ContactPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/project/:slug' element={<ProjectPage />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
