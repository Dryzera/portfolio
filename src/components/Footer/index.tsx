import styles from './styles.module.css';
import { Container } from '../Container';

export function Footer() {
  return (
    <Container>
      <footer className={styles.footer}>
        <span>Endryus Daniel &copy; Todos os direitos reservados.</span>
      </footer>
    </Container>
  );
}
