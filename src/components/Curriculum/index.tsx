import { useState } from 'react';
import styles from './styles.module.css';
import { IoIosClose } from 'react-icons/io';

export function Curriculum() {
  const [hidden, setHidden] = useState(false);

  function closeModal(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const { id } = e.target as HTMLElement;
    if (id === 'modal') setHidden(false);
  }

  return (
    <>
      <div
        id='modal'
        className={`${styles.modal} ${hidden ? styles.flex : styles.hidden}`}
        onClick={e => closeModal(e)}
      >
        <div className={styles['modal-content']}>
          <IoIosClose
            className={styles['close-button']}
            onClick={() => setHidden(false)}
          />

          <img src='/images/documents/curriculo_endryus-daniel.png' />

          <div className={styles['download-session']}>
            <h3>Baixar</h3>

            <a
              href='/images/documents/curriculo_endryus-daniel.png'
              download={true}
            >
              .png
            </a>
            <a
              href='/images/documents/curriculo_endryus-daniel.pdf'
              download={true}
            >
              .pdf
            </a>
            <a
              href='/images/documents/curriculo_endryus-daniel.docx'
              download={true}
            >
              .docx
            </a>
          </div>
        </div>
      </div>

      <div className={styles.contact}>
        <img src='/images/svgs/curriculum.svg' alt='ícone de currículo' />
        <a href='#' onClick={() => setHidden(true)}>
          Currículo
        </a>
      </div>
    </>
  );
}
