import { useNavigate, useParams } from 'react-router';
import projects from '../../database/projects.json';
import { Container } from '../Container';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

export function Project() {
  const [visible, setVisible] = useState(false);

  const { slug } = useParams();
  const navigate = useNavigate();

  const project = projects.find(p => p.id === slug);

  const mapStatus = {
    production: 'Em Produção',
    development: 'Em Desenvolvimento',
    paused: 'Pausado',
    completed: 'Finalizado',
  };

  useEffect(() => {
    if (!project) {
      toast.error('Projeto não encontrado.');
      navigate('/projects');
      return;
    }
  }, []); //eslint-disable-line

  if (!project) return null;

  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.titleSect}>
          <div className='linha'></div>
          <h2 className={styles.projectName}>
            {project.title}
            <a href={project.url} target='_blank'>
              <ExternalLink />
            </a>
          </h2>
          <div className='linha'></div>
        </div>
        <div className={styles.longDesc}>
          <p>{project.long_desc}</p>
        </div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className={`mySwiper ${styles.slider}`}
        >
          {project.photos.map(photo => (
            <SwiperSlide key={photo} className={styles.slide}>
              <img src={photo} alt='foto do projeto' />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.gridInfo}>
          <p>
            Data de Início:{' '}
            {String(new Date(project.start_date).getMonth() + 1).padStart(
              2,
              '0',
            )}
            /{new Date(project.start_date).getFullYear()}
          </p>
          {project.end_date && (
            <p>
              Data de Finalização:{' '}
              {String(new Date(project.end_date).getMonth() + 1).padStart(
                2,
                '0',
              )}
              /{new Date(project.end_date).getFullYear()}
            </p>
          )}
          <p>
            Status:{' '}
            <span className={styles[project.status]}>
              {mapStatus[project.status as keyof typeof mapStatus]}
            </span>
          </p>
        </div>
        <div className={styles.moreInfo}>
          <div
            className={styles.modeInfoBar}
            onClick={() => setVisible(prevVisible => !prevVisible)}
          >
            <span>Mais informações</span>
            <span>{!visible ? <ChevronDown /> : <ChevronUp />}</span>
          </div>

          <div className={`${styles.info} ${visible && styles.show}`}>oi</div>
        </div>
      </div>
    </Container>
  );
}
