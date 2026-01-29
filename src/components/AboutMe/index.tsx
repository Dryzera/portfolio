import { Container } from '../Container';
import styles from './styles.module.css';
import { useLanguage } from '../../hooks/useLanguge';

export function AboutMe() {
  const language = useLanguage();

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
              <h2>{language['about-me-title']}</h2>
              <div className='linha'></div>
            </div>
            <p>{language['about-me-description-1']}</p>
            <p>{language['about-me-description-2']}</p>
            <p>{language['about-me-description-3']}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
