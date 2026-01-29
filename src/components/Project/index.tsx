import { useNavigate, useParams } from 'react-router';
import projects from '../../database/projects.json';
import { Container } from '../Container';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { format } from 'date-fns';
import { useLanguage } from '../../hooks/useLanguge';

export function Project() {
  const [visible, setVisible] = useState(false);
  const language = useLanguage();

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
    document.title = project.title + ' - Endryus Daniel';
  }, []); //eslint-disable-line

  if (!project) return null;

  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.titleSect}>
          <div className='linha'></div>
          <a href={project.url} target='_blank'>
            <h2 className={styles.projectName}>
              {project.title}
              <ExternalLink />
            </h2>
          </a>
          <div className='linha'></div>
        </div>
        <div className={styles.longDesc}>
          {project.long_descs.map((long_desc, idx) => (
            <p key={idx}>{long_desc}</p>
          ))}
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
          <div className={styles.childGridInfo}>
            <span>{language['start-date']}</span>
            <span>{format(new Date(project.start_date), 'MM/yyyy')}</span>
          </div>
          {project.end_date && (
            <div className={styles.childGridInfo}>
              <span>{language['end-date']}</span>
              <span>{format(new Date(project.end_date), 'MM/yyyy')}</span>
            </div>
          )}
          <div className={styles.childGridInfo}>
            <span>status</span>
            <span className={styles[project.status]}>
              {mapStatus[project.status as keyof typeof mapStatus]}
            </span>
          </div>
          <div className={styles.childGridInfo}>
            <span>{language['technologies-used']}</span>
            <div className={styles.tecnologies}>
              {project.libs.map((lib, index) => {
                return (
                  <img
                    src={lib.img}
                    alt={lib.title}
                    title={lib.title}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.moreInfo}>
          <div
            className={styles.modeInfoBar}
            onClick={() => setVisible(prevVisible => !prevVisible)}
          >
            <span>{language['more-info']}</span>
            <span>{!visible ? <ChevronDown /> : <ChevronUp />}</span>
          </div>

          <div className={`${styles.info} ${visible && styles.show}`}>
            <div className={styles.contentMoreInfo}>
              <h4>{language['technical-information']}</h4>
              <div className={styles.flexInfo}>
                <ul>
                  <p>Features</p>
                  {project.features.map((feature, index) => {
                    return <li key={index}>{feature}</li>;
                  })}
                </ul>
                <ul>
                  <p>Tecnical Stack</p>
                  {project.tech_stack.map((stack, index) => {
                    return <li key={index}>{stack}</li>;
                  })}
                </ul>
                {project.contribuents.length > 0 && (
                  <ul>
                    <p>Contribuentes</p>
                    {project.contribuents.map((contribuent, index) => {
                      return !contribuent.profile_url ? (
                        <li key={index}>{contribuent.name}</li>
                      ) : (
                        <li>
                          <a
                            href={`${contribuent.profile_url}`}
                            key={index}
                            target='_blank'
                            className={styles.alignIcon}
                          >
                            {contribuent.name}
                            <ExternalLink className={styles.icon} />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tags}>
        {project.tags.map((tag, index) => {
          if (project.tags.length === index + 1) {
            return <span key={index}>{tag}</span>;
          }
          return <span key={index}>{tag} • </span>;
        })}
      </div>
    </Container>
  );
}
