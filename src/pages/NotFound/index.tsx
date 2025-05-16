import styles from './styles.module.css';
import { useLocation } from 'react-router';

export default function NotFound() {
  const { pathname } = useLocation();
  return (
    <div className={styles.backWhite}>
      <div className={styles.content}>
        <h1>
          Página não Encontrada <strong>(404)</strong>
        </h1>
        <p>Não encontramos nada no endereço "{pathname}"</p>
        <p>
          Volte para a <a href='/'>Home</a>
        </p>
      </div>
    </div>
  );
}
