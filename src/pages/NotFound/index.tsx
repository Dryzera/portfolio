import { useEffect } from 'react';
import styles from './styles.module.css';
import { useLocation } from 'react-router';

export default function NotFound() {
  const { pathname } = useLocation();

  useEffect(() => {
    const body = document.querySelector('body') as HTMLElement;

    body.style.background = 'white';
  }, []);

  return (
    <div className={styles.content}>
      <h1>
        Página não Encontrada <strong>(404)</strong>
      </h1>
      <p>Não encontramos nada no endereço "{pathname}"</p>
      <p>
        Volte para a <a href='/'>Home</a>
      </p>
    </div>
  );
}
