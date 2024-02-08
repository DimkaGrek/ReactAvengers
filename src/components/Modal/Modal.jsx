import React, { useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { ModalContext } from 'components';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#rootModal');

export const Modal = ({ children }) => {
  const { toggleModal } = useContext(ModalContext);

  useEffect(() => {
    const handleEscape = event => {
      if (event.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [toggleModal]);

  const handleClick = event => {
    const { target, currentTarget } = event;
    if (target === currentTarget) {
      toggleModal();
    }
  };
  return createPortal(
    <div className={s.wrapper} onClick={handleClick}>
      <div className={s.modal}>
        <button className={s.button} onClick={toggleModal}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#FAFAFA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#FAFAFA"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>,

    modalRoot
  );
};
