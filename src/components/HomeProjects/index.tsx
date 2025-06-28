import { Container } from '../Container';
import styles from './styles.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { RouteLink } from '../../routes/RouteLink';

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
            <SwiperSlide className={styles.slide}>
              <div className={styles.project}>
                <h4>ED Planejamentos</h4>
                <img
                  src='/images/global/ed-planejamentos-icon.png'
                  alt='Logo da ED Planejamentos'
                />
                <RouteLink href='/project/ed-planejamentos-4j32'>
                  Detalhes
                </RouteLink>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.project}>
                <h4>TrackED</h4>
                <img
                  src='/images/global/tracked-icon.png'
                  alt='Logo da trackED'
                />
                <RouteLink href='/project/tracked-ija2'>Detalhes</RouteLink>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <div className={styles.project}>
                <h4>Tio Elias Londrina</h4>
                <img
                  src='/images/global/tio-elias-logo.png'
                  alt='Logo do Tio Elias Londrina'
                />
                <RouteLink href='/project/tio-elias-londrina-89r3'>
                  Detalhes
                </RouteLink>
              </div>
            </SwiperSlide>
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
