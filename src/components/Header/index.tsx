import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { AppWindow, HomeIcon, MoonIcon, SunIcon } from 'lucide-react';
import { RouteLink } from '../../routes/RouteLink';
import { toast } from 'react-toastify';
import { useGeneralContext } from '../../contexts/GeneralContext/useGeneralContext';

export function Header() {
  const { state } = useGeneralContext();
  const { setState } = useGeneralContext();

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  function handleChangeTheme() {
    setTheme(prev => {
      return prev === 'dark' ? 'light' : 'dark';
    });
    if (window.innerWidth < 600) {
      toast.dismiss();
      toast.warn('Dispositivos móveis podem bloquear a troca de tema');
    }
  }

  function handleChangeLanguage() {
    setState(
      state.language === 'pt'
        ? { ...state, language: 'en' }
        : { ...state, language: 'pt' },
    );
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className={styles.header}>
      <div className={styles.item}>
        <RouteLink
          href='/'
          title='Ir para a página inicial'
          aria-label='Ir para a página inicial'
          className={styles.ancor}
        >
          <HomeIcon />
        </RouteLink>
      </div>
      <div className={styles.item}>
        <RouteLink
          href='/projects'
          title='Ir para a página de projetos'
          aria-label='Ir para a página de projetos'
          className={styles.ancor}
        >
          <AppWindow />
        </RouteLink>
      </div>
      <div
        title='Trocar o tema de cores da página'
        aria-label='Trocar o tema de cores da página'
        className={`${styles.item} ${styles.ancor}`}
      >
        {theme === 'light' ? (
          <MoonIcon onClick={handleChangeTheme} />
        ) : (
          <SunIcon onClick={handleChangeTheme} />
        )}
      </div>

      <div
        title='Trocar o idioma da página'
        aria-label='Trocar o idioma da página'
        className={`${styles.item} ${styles.ancor}`}
      >
        <img
          src={`/images/svgs/flag-${state.language === 'pt' ? 'en' : 'pt'}.svg`} // invertido para mostrar a bandeira do idioma para o qual vai trocar
          alt={`Bandeira do idioma ${state.language === 'pt' ? 'inglês' : 'português'}`}
          className={styles.flag}
          onClick={handleChangeLanguage}
        />
      </div>
    </header>
  );
}
