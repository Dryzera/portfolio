import { Container } from '../Container';
import styles from './styles.module.css';

export function AboutMe() {
  return (
    <Container animate={'fade-right'}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.animation}>
            <img
              src='/videos/gifs/animation-2.gif'
              alt='um gif de um laptop com gráficos em setores se movendo na tela'
            />
          </div>
          <div className={styles.content}>
            <div className={styles.titleSect}>
              <div className='linha'></div>
              <h2>Sobre Mim</h2>
              <div className='linha'></div>
            </div>
            <p>
              Meu nome é Endryus, tenho 18 anos e atualmente estou no 3º ano do
              ensino médio. Trabalho como tutor de programação, com foco em
              Python, e dou aulas para iniciantes. Também estudo desenvolvimento
              web, e tenho interesse em seguir carreira na área de tecnologia,
              além do desejo de cursar Engenharia de Software. Além disso, sou
              dedicado aos estudos, curioso por novas tecnologias e sempre em
              busca de aprender mais para aprimorar meus projetos.
            </p>
            <p>
              Além de possuir conhecimento em Python, Django, Postgresql, MySQL,
              HTML, CSS, JavaScript, TypeScript, React e outros frameworks.
              Também tenho experiência em administração de servidores Linux, com
              projetos reais em produção rodando neles. Possuo domínio sobre
              hardware, já tendo exercido funções neste ramo.
            </p>
            <p>
              Algumas soft skills: trabalho em equipe, organização, gestão de
              tempo, pensamento crítico, entre outras.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
