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
              loading='lazy'
            />
          </div>
          <div className={styles.content}>
            <div className={styles.titleSect}>
              <div className='linha'></div>
              <h2>Sobre Mim</h2>
              <div className='linha'></div>
            </div>
            <p>
              Meu nome é Endryus, tenho 18 anos e atualmente curso Engenharia de
              Software. Trabalho como desenvolvedor Back-End presencialmente em
              Londrina/PR. Também estudo desenvolvimento voltado a sistemas, e
              tenho interesse em seguir carreira na área de tecnologia,
              pretendendo cursar Engenharia de Software. Além disso, sou
              dedicado aos estudos, curioso por novas tecnologias e sempre em
              busca de aprender mais para aprimorar meus conhecimentos, projetos
              e habilidades.
            </p>
            <p>
              Possuo conhecimento em Python, Django, Postgresql, MySQL, HTML,
              CSS, JavaScript, TypeScript, C++, php, React e outros frameworks.
              Também tenho experiência em administração de servidores Linux, com
              projetos reais em produção rodando neles. Possuo domínio sobre o
              hardware, já tendo exercido funções relacionadas a ele.
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
