import CloseButton from '@/components/customElements/CloseButton';
import styles from './EditProducts.module.css';
import { useState } from 'react';
import arrow from '@/assets/public/arrow.svg';
import SaveButton from '@/components/customElements/SaveButton';
interface Props {
  isOpen: any;
  onClose: any;
  children: any;
  openModal: () => void;
  product: any;
}
export default function ComponentName({
  isOpen,
  onClose,
  children,
  openModal,
  product,
}: Props) {
  const [toggleStatus, setToggleStatus] = useState(false);

  return (
    <main className={styles.screen}>
      <div>
        <CloseButton onClose={onClose} />
        <h3>{children}</h3>
        <div>
          <h3>General</h3>
          <span>{product?.productName}</span>
          <div className={styles.containerInput}>
            <div className={styles.categoriesSelect}>
              <div
                className={styles.customSelect}
                onClick={() => {
                  setToggleStatus(!toggleStatus);
                }}
              >
                <div className={styles.selectTrigger}>
                  <span> Español </span>
                  <img src={arrow} alt="" className={styles.arrowSelect} />
                </div>
                <div className={toggleStatus ? styles.options : styles.hidden}>
                  <span className={styles.option}>Option</span>
                  <span className={styles.option}>Option</span>
                  <span className={styles.option}>Optionyou</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3>Precios de venta</h3>
          <div className={styles.pricesContainer}>
            <div>
              <div className={styles.priceInput}>
                <span>Restaurante</span>
                <input type="text" placeholder="0.00" />
                
              </div>
              <div className={styles.priceInput}>
                <span>Para llevar</span>
                <input type="text" placeholder="0.00" />
                <label className={styles.switch}>
                  <input type="checkbox" />
                  <span className={styles.slider}></span>
                </label>
              </div>
              <div className={styles.priceInput}>
                <span>Restaurante</span>
                <input type="text" placeholder="0.00" />
                <label className={styles.switch}>
                  <input type="checkbox" />
                  <span className={styles.slider}></span>
                </label>
              </div>
              <div className={styles.priceInput}>
                <span>Restaurante</span>
                <input type="text" placeholder="0.00" />
                <label className={styles.switch}>
                  <input type="checkbox" />
                  <span className={styles.slider}></span>
                </label>
              </div>
              <div className={styles.priceInput}>
                <span>Restaurante</span>
                <input type="text" placeholder="0.00" />
                <label className={styles.switch}>
                  <input type="checkbox" />
                  <span className={styles.slider}></span>
                </label>
              </div>
            </div>
            <div>
              <div className={styles.priceInput}>
                <span>Restaurante</span>
                <input type="text" placeholder="0.00" />
                <label className={styles.switch}>
                  <input type="checkbox" />
                  <span className={styles.slider}></span>
                </label>
              </div>
              <div className={styles.priceInput}>
                <span>Restaurante</span>
                <input type="text" placeholder="0.00" />
                <label className={styles.switch}>
                  <input type="checkbox" />
                  <span className={styles.slider}></span>
                </label>
              </div>
              <div className={styles.priceInput}>
                <span>Restaurante</span>
                <input type="text" placeholder="0.00" />
                <label className={styles.switch}>
                  <input type="checkbox" />
                  <span className={styles.slider}></span>
                </label>
              </div>
              <div className={styles.priceInput}>
                <span>Restaurante</span>
                <input type="text" placeholder="0.00" />
                <label className={styles.switch}>
                  <input type="checkbox" />
                  <span className={styles.slider}></span>
                </label>
              </div>
              <div className={styles.priceInput}>
                <span>Restaurante</span>
                <input type="text" placeholder="0.00" />
                <label className={styles.switch}>
                  <input type="checkbox" />
                  <span className={styles.slider}></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <SaveButton action={() => {}} />
        </div>
      </div>
    </main>
  );
}
