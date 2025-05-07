import { Container } from '../Container';
import styles from './styles.module.css';

export function AboutMe() {
  return (
    <Container animate={'fade-right'}>
      <div className={styles.titleSect}>
        <div className='linha'></div>
        <h2>Sobre Mim</h2>
        <div className='linha'></div>
      </div>
    </Container>
  );
}
