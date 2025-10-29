import { Container } from '../Container';
import styles from './styles.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { RouteLink } from '../../routes/RouteLink';
import projects from '../../database/projects.json';

export function HomeProjects() {
  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.titleSect}>
            <div className='linha'></div>
            <h2>Alguns Projetos</h2>
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
                        Detalhes
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
            veja todos os meus <RouteLink href='/projects'>projetos</RouteLink>
          </span>
        </div>
      </div>
    </Container>
  );
}
