import { useEffect } from 'react';
import { GeneralProjects } from '../../components/GeneralProjects';
import DefaultTemplate from '../../templates/DefaultTemplate';

export default function ProjectsPage() {
  useEffect(() => {
    document.title = 'Projetos - Endryus Daniel';
  }, []);

  return (
    <DefaultTemplate>
      <GeneralProjects />
    </DefaultTemplate>
  );
}
