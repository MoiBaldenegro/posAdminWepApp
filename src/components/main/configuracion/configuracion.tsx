import { useState } from 'react';
import styles from './configuracion.module.css';
import {
  ADMIN_CONFIGS,
  CAJA_CHICA,
  NOTIFICACIONES,
  PREFERENCIAS,
  SUCURSAL,
} from './const';
import BranchConfig from './branchConfig/branchConfig';
import { useModal } from '@/hooks/useModals';
import CashFloatConfig from './cashFLoatConfig/cashFLoatConfig';
import PreferencesConfig from './preferencesConfig/preferencesConfig';
import NotificationsConfig from './notificationsConfig/notificationsConfig';

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

        {$openModal.isOpen && $openModal.modalName === SUCURSAL ? (
          <BranchConfig
            isOpen={$openModal.isOpen}
            onClose={$openModal.closeModal}
          >
            Sucursal
          </BranchConfig>
        ) : $openModal.isOpen && $openModal.modalName === CAJA_CHICA ? (
          <CashFloatConfig
            isOpen={$openModal.isOpen}
            onClose={$openModal.closeModal}
          >
            Caja chica
          </CashFloatConfig>
        ) : $openModal.isOpen && $openModal.modalName === PREFERENCIAS ? (
          <PreferencesConfig
            isOpen={$openModal.isOpen}
            onClose={$openModal.closeModal}
          >
            Preferencias
          </PreferencesConfig>
        ) : $openModal.isOpen && $openModal.modalName === NOTIFICACIONES ? (
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
