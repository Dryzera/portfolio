import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { AppWindow, HomeIcon, MoonIcon, SunIcon } from 'lucide-react';
import { RouteLink } from '../../routes/RouteLink';
import { toast } from 'react-toastify';

export function Header() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  function handleChangeTheme() {
    setTheme(prev => {
      return prev === 'dark' ? 'light' : 'dark';
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (window.innerWidth < 600) {
      toast.dismiss();
      toast.warn('Disposítivos móveis podem bloquear a troca de tema.');
    }
  }, [theme]);

  return (
    <header className={styles.header}>
      <div className={styles.item}>
        <RouteLink
          href='/'
          title='Ir para a página de contatos'
          aria-label='Ir para a página de contatos'
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
    </header>
  );
}
