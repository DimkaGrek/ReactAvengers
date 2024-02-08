import React, { createContext, useState } from 'react';

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  return (
    <ModalContext.Provider value={{ isOpenModal, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};
export { ModalContext, ModalProvider };
