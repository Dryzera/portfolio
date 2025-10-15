import { useState } from 'react';
import styles from './styles.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useGeneralContext } from '../../contexts/GeneralContext/useGeneralContext';
import { RouteLink } from '../../routes/RouteLink';

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
          <RouteLink
            href='/'
            className={`${styles.link} ${
              state.actualPage === '/' && styles.pageSelected
            }`}
          >
            Home
          </RouteLink>
          <RouteLink
            href='/projects'
            className={`${styles.link} ${
              state.actualPage === '/projects' && styles.pageSelected
            }`}
          >
            Projetos
          </RouteLink>
          {/* <RouteLink
            href='/blog'
            className={`${styles.link} ${
              state.actualPage === '/blog' && styles.pageSelected
            }`}
          >
            Blog
          </RouteLink> ### IMPLEMENTAR ISSO QUANDO O BLOG FOR LANÇADO ### */}
          <RouteLink
            href='/contacts'
            className={`${styles.link} ${
              state.actualPage === '/contacts' && styles.pageSelected
            }`}
          >
            Contatos
          </RouteLink>
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
