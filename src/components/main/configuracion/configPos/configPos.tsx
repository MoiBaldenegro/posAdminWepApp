import { useState } from 'react';
import styles from './configPos.module.css';
import { NOTIFICACIONES, POS_CONFIGS } from './const';
import { useModal } from '@/hooks/useModals';
import NotificationsConfig from './notificationsConfig/notificationsConfig';

export default function ConfigPos() {
  const [openModal, setOpenModal] = useState('');
  const $openModal = useModal(openModal);

  return (
    <div className={styles.container}>
      <h1>Configuracion</h1>
      <div>
        {POS_CONFIGS.map((item, index) => (
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
        {$openModal.isOpen && $openModal.modalName === NOTIFICACIONES ? (
          <NotificationsConfig
            isOpen={$openModal.isOpen}
            onClose={$openModal.closeModal}
          >
            Notificaciones
          </NotificationsConfig>
        ) : null}
      </div>
    </div>
  );
}
