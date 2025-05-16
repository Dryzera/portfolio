import { Container } from '../Container';
import styles from './styles.module.css';

export function MyTecnologies() {
  return (
    <Container animate={'fade-left'}>
      <div className={styles.content}>
        <div className={styles.titleSect}>
          <div className='linha'></div>
          <h2>Tecnologias Dominadas</h2>
          <div className='linha'></div>
        </div>
        <div className={styles.gridContent}>
          <div className={styles.grid}>
            <div className={`${styles.gridItem}`}>
              <h3>Front-End</h3>
              <div className={styles.tecnologies}>
                <img
                  src='/images/svgs/js.svg'
                  alt='Ícone do JavaScript'
                  title='JavaScript'
                  aria-label=''
                />
                <img
                  src='/images/svgs/ts.svg'
                  alt='Ícone do TypeScript'
                  title='TypeScript'
                />
                <img
                  src='/images/svgs/react.svg'
                  alt='Ícone do React'
                  title='React'
                />
                <img
                  src='/images/svgs/html.svg'
                  alt='Ícone do HTML'
                  title='HTML'
                />
                <img
                  src='/images/svgs/css.svg'
                  alt='Ícone do CSS'
                  title='CSS'
                />
              </div>
            </div>
            <div className={`${styles.gridItem}`}>
              <h3>Back-End</h3>
              <div className={styles.tecnologies}>
                <img
                  src='/images/svgs/python.svg'
                  alt='Ícone do Python'
                  title='Python'
                />
                <img
                  src='/images/svgs/django.svg'
                  alt='Ícone do Django'
                  title='Django'
                />
                <img
                  src='/images/svgs/node-js.svg'
                  alt='Ícone do Node.js'
                  title='Node.js'
                />
                <img
                  src='/images/svgs/express.svg'
                  alt='Ícone do Express.js'
                  title='Express.js'
                />
              </div>
            </div>
            <div className={`${styles.gridItem}`}>
              <h3>Banco de Dados</h3>
              <div className={styles.tecnologies}>
                <img
                  src='/images/svgs/postgresql.svg'
                  alt='Ícone do PostgreSQL'
                  title='PostgreSQL'
                />
                <img
                  src='/images/svgs/mysql.svg'
                  alt='Ícone do MySQL'
                  title='MySQL'
                />
                <img
                  src='/images/svgs/mongodb.svg'
                  alt='Ícone do MongoDB'
                  title='MongoDB'
                />
                <img
                  src='/images/svgs/redis.svg'
                  alt='Ícone do Redis'
                  title='Redis'
                />
              </div>
            </div>
            <div className={`${styles.gridItem}`}>
              <h3>Outros</h3>
              <div className={styles.tecnologies}>
                <img
                  src='/images/svgs/git.svg'
                  alt='Ícone do Git'
                  title='Git'
                />
                <img
                  src='/images/svgs/github.svg'
                  alt='Ícone do Github'
                  title='Github'
                />
                <img
                  src='/images/svgs/nginx.svg'
                  alt='Ícone do Nginx'
                  title='Nginx'
                />
                <img
                  src='/images/svgs/docker.svg'
                  alt='Ícone do Docker'
                  title='Docker'
                />
                <img
                  src='/images/svgs/linux.svg'
                  alt='Ícone do Linux'
                  title='Linux'
                />
                <img
                  src='/images/svgs/gcp.svg'
                  alt='Ícone da Google Cloud Platform'
                  title='Google Cloud Platform'
                />
              </div>
            </div>
          </div>
          <div className={styles.animation}>
            <img
              src='/videos/gifs/animation-3.gif'
              alt='um gif de um laptop com gráficos em setores se movendo na tela'
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
