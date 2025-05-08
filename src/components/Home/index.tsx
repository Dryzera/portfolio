import { FaPython, FaReact } from 'react-icons/fa';
import { Container } from '../Container';
import styles from './styles.module.css';
import { IoLogoJavascript } from 'react-icons/io5';
import { BsArrowReturnRight } from 'react-icons/bs';
import { SiDjango } from 'react-icons/si';

export function Home() {
  return (
    <Container>
      <div className={styles.content}>
        <div className={styles.prevInfo}>
          <div className={styles.name}>
            <h3 className={styles.myName}>
              <strong>Endryus Daniel</strong>
            </h3>
            <span>Back-end Developer</span>
          </div>

          <div className={styles.skills}>
            <div className={styles.skillsDesc}>
              <h2 className={styles.shortDesc}>
                desenvolvedor experiente em django e react, com{' '}
                <a href='#'>projetos</a> em produção
              </h2>
              <p>
                <BsArrowReturnRight color='orange' /> minhas primary hard skills
              </p>
              <ul className={styles.ulSkills}>
                <li>
                  <IoLogoJavascript color='yellow' />
                </li>
                <li>
                  <FaPython color='green' />
                </li>
                <li>
                  <FaReact color='cyan' />
                </li>
                <li>
                  <SiDjango color='green' />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
