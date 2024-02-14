import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';

import { Icon } from 'components';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#rootModal');

export const Modal = ({ children, pd, toggleModal, anotherModal = false }) => {
  useEffect(() => {
    if (anotherModal) return;
    const handleEscape = event => {
      if (event.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'scroll';
    };
  }, [toggleModal, anotherModal]);

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
