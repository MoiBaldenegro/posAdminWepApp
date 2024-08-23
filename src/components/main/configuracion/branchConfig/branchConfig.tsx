import CloseButton from '@/components/customElements/CloseButton';
import styles from './branchConfig.module.css';
import saveIcon from '@/assets/public/disquetIcon.svg';
import uploadIcon from '@/assets/public/uploadIcon.svg';

interface Props {
  isOpen: any;
  onClose: any;
  children: any;
}

export default function BranchConfig({ isOpen, onClose, children }: Props) {
  return (
    <main className={styles.screen}>
      <section>
      <CloseButton onClose={onClose}></CloseButton>
        <h4>{children}</h4>
        <div>
          <div>
            <div>
              <strong>Matriz</strong>
              <input placeholder='Nombre comercial' ></input>
              <input placeholder='Razón social' ></input>
              <input placeholder='RFC' ></input>
            </div>
            <div>
              <strong>Dirección</strong>
              <input placeholder='Calle' ></input>
              <div>
                <input placeholder='Núm. exterior' ></input>
                <input placeholder='Núm. interior (Opcional)' ></input>
              </div>
              <div>
                <input placeholder='Colonia' ></input>
                <input placeholder='Código postal' ></input>
              </div>
              <div>
                <input placeholder='Ciudad' ></input>
                <input placeholder='Estado' ></input>
              </div>
              <input placeholder='País' ></input>
            </div>
          </div>
          <div>
            <div>
              <strong>Información de contacto</strong>
              <input placeholder='Teléfono' ></input>
              <input placeholder='Correo' ></input>
              <input placeholder='Sitio web' ></input>
            </div>
            <div>
              <strong>Logo</strong>
              <div>
                <img src={uploadIcon} alt="upload-icon"></img>
                <span>Importar imagen</span>
              </div>
            </div>
          </div>
        </div>
        <div>
        <button>
          <img src={saveIcon} alt="save-Icon"></img>
          Guardar
          </button>
        </div>
      </section>
    </main>
  );
}
