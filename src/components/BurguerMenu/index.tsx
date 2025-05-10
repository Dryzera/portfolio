import { useState } from 'react';
import styles from './styles.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function BurguerMenu() {
  const [visibleState, setVisibleState] = useState(false);

  return (
    <>
      <div className={`${styles.nav} ${visibleState && styles.show}`}>
        <ul>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
        </ul>
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
