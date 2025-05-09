import { Container } from '../Container';
import styles from './styles.module.css';

export function AboutMe() {
  return (
    <Container animate={'fade-right'}>
      <div className={styles.container}>
        <div className={styles.titleSect}>
          <div className='linha'></div>
          <h2>Sobre Mim</h2>
          <div className='linha'></div>
        </div>
        <div className={styles.content}>
          <p>
            Meu nome é Endryus, tenho 18 anos e atualmente estou no 3º ano do
            ensino médio. Trabalho como tutor de programação, com foco em
            Python, e dou aulas para iniciantes. Também estudo desenvolvimento
            web, com conhecimentos em Django, HTML, CSS, JavaScript, TypeScript
            e React. Tenho interesse em seguir carreira na área de tecnologia e
            pretendo cursar Engenharia de Software. Além disso, sou dedicado aos
            estudos, curioso por novas tecnologias e sempre em busca de aprender
            mais para aprimorar meus projetos.
          </p>
          <p>
            Também possuo algumas soft skills: trabalho em equipe, organização,
            gestão de tempo, pensamento crítico, entre outras.
          </p>
        </div>
      </div>
    </Container>
  );
}
