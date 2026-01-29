import { Container } from '../Container';
import styles from './styles.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { RouteLink } from '../../routes/RouteLink';
import projects from '../../database/projects.json';
import { useLanguage } from '../../hooks/useLanguge';

export function HomeProjects() {
  const language = useLanguage();

  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.titleSect}>
            <div className='linha'></div>
            <h2>{language['some-projects']}</h2>
            <div className='linha'></div>
          </div>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className={`mySwiper ${styles.slider}`}
          >
            {projects.map(project => {
              return (
                project.exalt && (
                  <SwiperSlide className={styles.slide}>
                    <div className={styles.project}>
                      <h4>{project.exalt}</h4>
                      <img
                        src={`${project.photos[0]}`}
                        alt={`Logo da ${project.title}`}
                      />
                      <RouteLink href={`/project/${project.id}`}>
                        {language.strings['details']}
                      </RouteLink>
                    </div>
                  </SwiperSlide>
                )
              );
            })}
          </Swiper>
        </div>
        <div className={styles.tipMyProjects}>
          <span>
            {language['see-all']}{' '}
            <RouteLink href='/projects'>
              {language.strings['projects'].toLowerCase()}
            </RouteLink>
          </span>
        </div>
      </div>
    </Container>
  );
}
