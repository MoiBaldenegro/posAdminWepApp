import CloseButton from '@/components/customElements/CloseButton';
import styles from './notificationsConfig.module.css';
interface Props {
  isOpen: any;
  onClose: any;
  children: any;
}
export default function NotificationsConfig({
  isOpen,
  onClose,
  children,
}: Props) {
  return (
    <main className={styles.screen}>
      <div>
        <CloseButton onClose={onClose}></CloseButton>
        {/*  
            NO OLVIADR HACER UN GIT PULL ANTES DE EMPEZAR A TRABAJAR!! 
            PERDON LA INSISTENCIA PERO ES IMPORTANTE HAHA 
            FIN DEL COMUNICADO... :3 
            XD
        */}
        <h1>{children}</h1>
      </div>
    </main>
  );
}
