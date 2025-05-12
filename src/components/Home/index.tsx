import { Container } from '../Container';
import styles from './styles.module.css';
import { BsArrowReturnRight } from 'react-icons/bs';
import { RouteLink } from '../../routes/RouteLink';

export function Home() {
  return (
    <Container>
      <div className={styles.content}>
        <div className={styles.prevInfo}>
          <div className={styles.name}>
            <h3 className={styles.myName}>
              <strong>Endryus Daniel</strong>
            </h3>
            <span className={styles.secondTitle}>Back-end Developer</span>
          </div>

          <div className={styles.skills}>
            <div className={styles.skillsDesc}>
              <h2 className={styles.shortDesc}>
                desenvolvedor experiente em django e react, com{' '}
                <RouteLink href='/projects'>projetos</RouteLink> em produção
              </h2>
              <p className={styles.secondTitle}>
                <BsArrowReturnRight className={styles.alignArrow} /> minhas
                primary hard skills
              </p>
              <ul className={styles.ulSkills}>
                <li>
                  <img
                    src='/images/svgs/python.svg'
                    alt='icone da linguagem de programação python'
                    className={styles.svgHardSkills}
                    title='Ícone do Python'
                  />
                </li>
                <li>
                  <img
                    src='/images/svgs/js.svg'
                    alt='icone da linguagem de programação javascript'
                    className={styles.svgHardSkills}
                    title='Ícone do JavaScript'
                  />
                </li>
                <li>
                  <img
                    src='/images/svgs/ts.svg'
                    alt='icone da linguagem de programação typescript'
                    className={styles.svgHardSkills}
                    title='Ícone do TypeScript'
                  />
                </li>
                <li>
                  <img
                    src='/images/svgs/django.svg'
                    alt='icone do framework django'
                    className={styles.svgHardSkills}
                    title='Ícone do Django'
                  />
                </li>
                <li>
                  <img
                    src='/images/svgs/react.svg'
                    alt='icone da linguagem do framework react'
                    className={styles.svgHardSkills}
                    title='Ícone do React'
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.photo}>
          <img src='/images/global/photo.jpeg' alt='minha foto' />
        </div>
      </div>
    </Container>
  );
}
