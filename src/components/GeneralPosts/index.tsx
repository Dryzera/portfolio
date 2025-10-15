import { RouteLink } from '../../routes/RouteLink';
import { Container } from '../Container';
import styles from './styles.module.css';

export function GeneralPosts() {
  return (
    <Container>
      <div className={styles.titleSect}>
        <div className='linha'></div>
        <h2>Posts</h2>
        <div className='linha'></div>
      </div>
      <div className={styles.container}>
        <div className={styles.onDev}>
          <p>Ainda em desenvolvimento. Volte em breve! 🛠️</p>
        </div>
        <div className={styles.onDev}>
          Dê uma olhada nos meus{' '}
          <RouteLink href='/projects'>projetos</RouteLink> ou volte para a{' '}
          <RouteLink href='/'>home</RouteLink>.
        </div>
      </div>
    </Container>
  );
}
