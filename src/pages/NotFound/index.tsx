import styles from './styles.module.css';
import { Container } from '../../components/Container';
import { RouteLink } from '../../routes/RouteLink';
import DefaultTemplate from '../../templates/DefaultTemplate';

export default function NotFound() {
  return (
    <DefaultTemplate>
      <Container>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>Ahhh, não encontramos essa página 😥</h2>
            <h4>Que tal ir para outro lugar? 📍</h4>
          </div>
          <div className={styles.grid}>
            <div className={styles.tip}>
              <p>Aqui estão as páginas catalogadas 🌐</p>

              <ul>
                <li>
                  <RouteLink href='/'>Home</RouteLink>
                </li>
                •
                <li>
                  <RouteLink href='/projects'>Projetos</RouteLink>
                </li>
                •
                <li>
                  <RouteLink href='/contacts'>Contatos</RouteLink>
                </li>
              </ul>
            </div>
            <div>
              <img
                src='https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Hourglass%20Not%20Done.png'
                alt='Hourglass Not Done'
                width='150'
                height='150'
              />
            </div>
          </div>
        </div>
      </Container>
    </DefaultTemplate>
  );
}
