import styles from './styles.module.css';

type ContainerProps = {
  children: React.ReactNode;
  animate?: 'fade-right' | 'fade-left' | 'zoom-out-right' | null;
};

export function Container({ children, animate = null }: ContainerProps) {
  return (
    <div className={styles.container}>
      <div className='content' data-aos={animate} data-aos-delay='100'>
        {children}
      </div>
    </div>
  );
}
