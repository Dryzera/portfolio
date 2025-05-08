import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { MoonIcon, SunIcon } from 'lucide-react';

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
        {theme === 'light' ? (
          <SunIcon onClick={handleChangeTheme} />
        ) : (
          <MoonIcon onClick={handleChangeTheme} />
        )}
      </div>
    </header>
  );
}
