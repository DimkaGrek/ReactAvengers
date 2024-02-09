import React, { useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';

import { Icon, ModalContext } from 'components';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#rootModal');

export const Modal = ({ children, pd }) => {
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

  const modalClass = classNames({
    [`${s.modal}`]: true,
    [`${s.form}`]: pd === 40,
    [`${s.profile}`]: pd === 60,
    [`${s.logout}`]: pd === 80,
  });

  return createPortal(
    <div className={s.wrapper} onClick={handleClick}>
      <div className={modalClass}>
        <button className={s.button} onClick={toggleModal}>
          <Icon className={s.icon} name={'x-mark'} size={24} />
        </button>
        {children}
      </div>
    </div>,

    modalRoot
  );
};
