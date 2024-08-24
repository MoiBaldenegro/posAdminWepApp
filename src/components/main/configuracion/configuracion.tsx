import { useState } from 'react';
import styles from './configuracion.module.css';
import { ADMIN_CONFIGS } from './const';
import BranchConfig from './branchConfig/branchConfig';
import { useModal } from '@/hooks/useModals';

export default function Config() {
  const [openModal, setOpenModal] = useState('');

  const $openModal = useModal(openModal);

  return (
    <div className={styles.container}>
      <h1>Configuracion</h1>
      <div>
        {ADMIN_CONFIGS.map((item, index) => (
          <div
            className={styles.cardAdminConfig}
            key={index}
            onClick={() => {
              setOpenModal(item.type);
              $openModal.openModal();
            }}
          >
            <div className={styles.icon}>
              <img src={item.path} alt="icon" />
            </div>
            <h4>{item.name}</h4>
          </div>
        ))}

        {$openModal.isOpen && $openModal.modalName === openModal ? (
          <BranchConfig
            isOpen={$openModal.isOpen}
            onClose={$openModal.closeModal}
          >
            Sucursal
          </BranchConfig>
        ) : null}
      </div>
    </div>
  );
}
