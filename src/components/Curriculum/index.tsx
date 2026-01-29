import { useState } from 'react';
import styles from './styles.module.css';
import { IoIosClose } from 'react-icons/io';
import { toast } from 'react-toastify';
import { useLanguage } from '../../hooks/useLanguge';

export function Curriculum() {
  const [hidden, setHidden] = useState(false);
  const [showFormalResume, setShowFormalResume] = useState(true);
  const language = useLanguage();

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
          <div className={styles['select-resume']}>
            <span
              onClick={() => setShowFormalResume(true)}
              className={`${styles['select-option']} ${
                showFormalResume && styles['selected-option']
              }`}
            >
              {language.strings['formal']}
            </span>
            <span
              onClick={() => setShowFormalResume(false)}
              className={`${styles['select-option']} ${
                !showFormalResume && styles['selected-option']
              }`}
            >
              {language.strings['social']}
            </span>
          </div>

          {!showFormalResume ? (
            <div
              className={`${styles['resume-flex']} ${styles['section-resume-display']} `}
            >
              <img src='/documents/curriculo_endryus-daniel.png' />

              <div className={styles['download-session']}>
                <h3>{language['download-social-resume']}</h3>

                <a
                  href='/documents/curriculo_endryus-daniel.png'
                  download={true}
                  onClick={downloadMessage}
                  aria-label='Baixar curriculo em .png'
                  title='Baixar curriculo em .png'
                >
                  .png
                </a>
                <a
                  href='/documents/curriculo_endryus-daniel.pdf'
                  download={true}
                  onClick={downloadMessage}
                  aria-label='Baixar curriculo em .pdf'
                  title='Baixar curriculo em .pdf'
                >
                  .pdf
                </a>
              </div>
            </div>
          ) : (
            <div className={`${styles['section-resume-display']}`}>
              <div className={styles['download-session']}>
                <h3>{language['download-formal-resume']}</h3>

                <a
                  href='/documents/endryus-formal-resume.pdf'
                  download={true}
                  onClick={downloadMessage}
                  aria-label='Baixar curriculo formal em .pdf'
                  title='Baixar curriculo formal em .pdf'
                >
                  .pdf
                </a>
              </div>

              <div className={styles['formal-resume-images']}>
                <img src='/documents/endryus-formal-resume-1.png' />
                <img src='/documents/endryus-formal-resume-2.png' />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={styles.contact}>
        <img src='/images/svgs/curriculum.svg' alt='ícone de currículo' />
        <span
          aria-label='Clique para ver ou baixar meu currículo.'
          className={styles['open-span']}
          onClick={() => setHidden(true)}
        >
          {language.strings['curriculum']}
        </span>
      </div>
    </>
  );
}
