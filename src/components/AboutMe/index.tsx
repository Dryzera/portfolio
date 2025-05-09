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
      <div className='content'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor totam
          animi facere, itaque voluptatibus dolorum esse natus tempore
          asperiores, nemo ullam deleniti corporis. Hic, id esse adipisci rerum
          repellendus facere.
        </p>
      </div>
    </Container>
  );
}
