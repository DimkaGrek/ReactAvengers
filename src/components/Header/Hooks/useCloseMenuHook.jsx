import { useState } from 'react';

const useCloseMenuHook = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };
  return { isOpen, closeMenu };
};

export default useCloseMenuHook;
