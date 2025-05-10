import { useState } from 'react';
import styles from './styles.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useGeneralContext } from '../../contexts/GeneralContext/useGeneralContext';

export function BurguerMenu() {
  const [visibleState, setVisibleState] = useState(false);
  const { state } = useGeneralContext();

  return (
    <>
      <div className={`${styles.divNav} ${visibleState && styles.show}`}>
        <span
          className={styles.closeMenu}
          onClick={() => setVisibleState(false)}
        >
          &times;
        </span>
        <nav className={styles.nav}>
          <a
            href='#'
            className={`${styles.link} ${
              state.actualPage === '/' ? styles.pageSelected : ''
            }`}
          >
            Home
          </a>
          <a
            href='#'
            className={`${styles.link} ${
              state.actualPage === 'projects' ? styles.pageSelected : ''
            }`}
          >
            Projetos
          </a>
          <a
            href='#'
            className={`${styles.link} ${
              state.actualPage === 'contacts' ? styles.pageSelected : ''
            }`}
          >
            Contatos
          </a>
        </nav>
      </div>

      <div
        className={styles.container}
        onClick={() => setVisibleState(!visibleState)}
      >
        <h3>{!visibleState ? <ChevronRight /> : <ChevronLeft />}</h3>
      </div>
    </>
  );
}
