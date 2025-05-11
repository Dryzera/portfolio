import styles from './styles.module.css';
import { Container } from '../Container';

export function Footer() {
  return (
    <Container>
      <footer className={styles.footer}>
        <span>
          <a href='https://github.com/Dryzera/portfolio' target='_blank'>
            Developed by Endryus Daniel 💙
          </a>
        </span>
      </footer>
    </Container>
  );
}
