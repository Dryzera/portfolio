import projects from '../../database/projects.json';
import { RouteLink } from '../../routes/RouteLink';
import { Container } from '../Container';
import styles from './styles.module.css';

export function GeneralProjects() {
  return (
    <Container>
      <div className={styles.titleSect}>
        <div className='linha'></div>
        <h2>Projetos</h2>
        <div className='linha'></div>
      </div>
      <div className={styles.container}>
        <div className={styles.gridProjects}>
          {projects.map(project => (
            <div
              className={`${styles.projectItem} ${styles[project.status]}`}
              key={project.id}
            >
              {project.photos.length !== 0 && <img src={project.photos[0]} />}
              <div>
                <h3>{project.title}</h3>
                <p>{project.short_desc}</p>
                <RouteLink href={`/project/${project.id}`}>
                  mais detalhes
                </RouteLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
