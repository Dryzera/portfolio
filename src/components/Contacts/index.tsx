import { FaQuestion } from 'react-icons/fa';
import { Container } from '../Container';
import styles from './styles.module.css';
import { Curriculum } from '../Curriculum';

type ContactsProps = {
  title: string;
};

export function Contacts({ title }: ContactsProps) {
  return (
    <Container>
      {/* curriculum modal */}

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.titleSect}>
            <h2>{title}</h2>
            <FaQuestion />
          </div>
          <div className={styles.contacts}>
            <div className={styles.contact}>
              <img src='/images/svgs/email.svg' alt='ícone do email' />
              <a href='mailto:endryusdaniel6321@gmail.com'>
                endryusdaniel6321@gmail.com
              </a>
            </div>
            <div className={`${styles.contact}`}>
              <img src='/images/svgs/linkedin.svg' alt='ícone do linkedin' />
              <a
                href='https://www.linkedin.com/in/endryus-daniel-rysik-de-oliveira/'
                target='_blank'
              >
                Endryus Daniel
              </a>
            </div>
            <div className={styles.contact}>
              <img src='/images/svgs/github.svg' alt='ícone do github' />
              <a href='https://github.com/dryzera/' target='_blank'>
                Dryzera
              </a>
            </div>
            <Curriculum />
          </div>
        </div>
      </div>
    </Container>
  );
}
