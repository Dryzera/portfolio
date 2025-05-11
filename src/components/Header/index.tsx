import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { AppWindow, MoonIcon, Phone, SunIcon } from 'lucide-react';

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
  }, [theme]);

  return (
    <header className={styles.header}>
      <div className={styles.item}>
        <a
          href='#'
          title='Ir para a página de projetos'
          aria-label='Ir para a página de projetos'
          className={styles.ancor}
        >
          <AppWindow />
        </a>
      </div>
      <div className={styles.item}>
        <a
          href='#'
          title='Ir para a página de contatos'
          aria-label='Ir para a página de contatos'
          className={styles.ancor}
        >
          <Phone />
        </a>
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
