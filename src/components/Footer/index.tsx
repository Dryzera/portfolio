import styles from './styles.module.css';
import { Container } from '../Container';
import { RouteLink } from '../../routes/RouteLink';

export function Footer() {
  return (
    <Container>
      <footer className={styles.footer}>
        <RouteLink href='/'>
          <img
            src='/images/favicons/favicon-no-background.png'
            alt='Logo do site'
          />
        </RouteLink>
        <span>
          <a href='https://github.com/Dryzera/portfolio' target='_blank'>
            Developed by Endryus Daniel 💚
          </a>
        </span>
      </footer>
    </Container>
  );
}
