import { useState } from 'react';
import styles from './styles.module.css';
import { IoIosClose } from 'react-icons/io';
import { toast } from 'react-toastify';

export function Curriculum() {
  const [hidden, setHidden] = useState(false);

  function closeModal(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const { id } = e.target as HTMLElement;
    if (id === 'modal') setHidden(false);
  }

  function downloadMessage() {
    toast.info('iniciando download...');
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
              onClick={downloadMessage}
              aria-label='Baixar curriculo em .png'
              title='Baixar curriculo em .png'
            >
              .png
            </a>
            <a
              href='/images/documents/curriculo_endryus-daniel.pdf'
              download={true}
              onClick={downloadMessage}
              aria-label='Baixar curriculo em .pdf'
              title='Baixar curriculo em .pdf'
            >
              .pdf
            </a>
            <a
              href='/images/documents/curriculo_endryus-daniel.docx'
              download={true}
              title='Baixar curriculo em .docx'
              onClick={downloadMessage}
              aria-label='Baixar curriculo em .docx'
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
