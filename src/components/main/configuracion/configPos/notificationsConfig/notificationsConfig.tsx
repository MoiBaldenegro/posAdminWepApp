import CloseButton from '@/components/customElements/CloseButton';
import styles from './notificationsConfig.module.css';
import arrow from '@/assets/public/arrow.svg'
import { useState } from 'react'
import { NOTIFICATION_CONFIG } from './notificationsConfig.lib';
import saveIcon from '@/assets/public/disquetIcon.svg';
import createIcon from '@/assets/public/createIcon.svg';

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
  
  const [toggleStatus,setToggleStatus]=useState(false)

  return (
    <main className={styles.screen}>
      <div> {/*Modal*/}
        <CloseButton onClose={onClose}></CloseButton>
        <h4>{children}</h4>

        <div> {/*Gradient box group*/}

         <div> {/*Gradient box*/}
          <span>Frecuencia de envío</span>
          <div> {/*Gray box*/}
            <div> {/*Line*/}
              <input type='radio' name='Frecuencia'></input>
              <span>Enviar en tiempo real</span>
            </div>
            <div> {/*Line*/}
              <input type='radio' name='Frecuencia'></input>
              <span>Enviar un resumen a las</span>
              <div className={styles.customSelect} onClick={()=>{setToggleStatus(!toggleStatus)}}>
                <div className={styles.selectTrigger}>
                  <span> 00:00 </span>
                  <img src={arrow} alt="arrow-icon" className={styles.arrowSelect}></img>
                </div>
                <div className={toggleStatus ? styles.options : styles.hidden}>
                  {
                   NOTIFICATION_CONFIG.map((element,index)=>(
                    <span className={styles.option} key={index}>{element}</span>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
         </div>

        <div> {/*Gradient box*/}
          <span>Recibir notificaciones</span>
          <div> {/*Gray box*/}
            <div> {/*Line*/}
              <label className={styles.switch}>
                <input type="checkbox"/>
                <span className={styles.slider}></span>
              </label>
              <span>Vía correo</span>
            </div>
            <input placeholder='Correo'></input>
            <button>
              <img src={createIcon} alt="create-icon"></img>
              Añadir otro
            </button>
          </div>

          <div> {/*Gray box*/}
            <div> {/*Line*/}
              <label className={styles.switch}>
                <input type="checkbox"/>
                <span className={styles.slider}></span>
              </label>
              <span>Vía SMS</span>
            </div>
            <input placeholder='Número telefónico'></input>
            <button>
              <img src={createIcon} alt="create-icon"></img>
              Añadir otro
            </button>
          </div>

          <div> {/*Gray box*/}
            <div> {/*Line*/}
              <label className={styles.switch}>
                <input type="checkbox"/>
                <span className={styles.slider}></span>
              </label>
              <span>Vía WhatsApp</span>
            </div>
            <input placeholder='Número telefónico'></input>
            <button>
              <img src={createIcon} alt="create-icon"></img>
              Añadir otro
            </button>
          </div>

        </div>

        <div> {/*Gradient box*/}
          <span>Eventos</span>
          <div> {/*Gray box*/}
            <div> {/*Line*/}
              <label className={styles.label}> <input type="checkbox" className={styles.check} />Cancelaciones</label> 
            </div>
            <div> {/*Line*/}
              <label className={styles.label}> <input type="checkbox" className={styles.check}/>Cortesías</label> 
            </div>
            <div> {/*Line*/}
              <label className={styles.label}> <input type="checkbox" className={styles.check}/>Descuentos</label> 
            </div>
            <div> {/*Line*/}
              <label className={styles.label}> <input type="checkbox" className={styles.check}/>Reapertura de cuentas</label> 
            </div>
            <div> {/*Line*/}
              <label className={styles.label}> <input type="checkbox" className={styles.check}/>Corte parcial</label> 
            </div>
            <div> {/*Line*/}
              <label className={styles.label}> <input type="checkbox" className={styles.check}/>Cierre de caja</label> 
            </div>
          </div>
        </div>

        </div>

        <div>
          <button>
            <img src={saveIcon} alt='save-icon'></img>
            Guardar
          </button>
        </div>
        
      </div>
    </main>
  );
}
