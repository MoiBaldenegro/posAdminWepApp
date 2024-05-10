import styles from './uploadFile.module.css';
//hooks
import { useDropzone } from 'react-dropzone';
//dependecies
//icons
import importIcon from '../../../assets/public/importIcon.svg';
import iconExcel from '../../../assets/public/iconExcel.svg';
import closeIcon from '../../../assets/public/closeIcon.svg';
import useUpload from '../../../hooks/useUpload';

interface Props {
  isOpen: any;
  onClose: any;
  children: any;
  openModal: any;
  actionType: (arg: any) => void;
}

export default function UploadFiles({
  isOpen,
  onClose,
  children,
  openModal,
  actionType,
}: Props) {
  const { handleUpload, resetFiles, onDrop, files } = useUpload(actionType);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  if (!isOpen) return null;
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <img src={closeIcon} className={styles.closeButton} onClick={onClose} />

        <span className={styles.tittle}>{children}</span>
        <div className={styles.dropZone} {...getRootProps()}>
          <input {...getInputProps()} />
          {files ? (
            <div className={styles.inDropZoneCharge}>
              <strong>Archivo seleccionado:</strong>
              <img src={iconExcel} alt="excel-icon" />
              <span>{files.name}</span>
              <button className={styles.resetButton} onClick={resetFiles}>
                Seleccionar otro archivo
              </button>
            </div>
          ) : (
            <div className={styles.inDropZone}>
              <p>
                Arrastra y suelta un archivo aquí o haz clic para seleccionarlo.
              </p>
              <img src={importIcon} alt="import-icon" />
            </div>
          )}
        </div>
        <button
          disabled={!files}
          className={styles.importButton}
          onClick={() => {
            handleUpload();
            onClose();
            openModal();
          }}
        >
          <img src={importIcon} alt="import-icon" />
          Importar
        </button>
      </div>
    </div>
  );
}
