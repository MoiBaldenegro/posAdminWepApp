import { useState } from 'react';

// Modificamos el hook para recibir un nombre o identificador
export const useModal = (modalName: string) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    openModal,
    closeModal,
    modalName,
  };
};
