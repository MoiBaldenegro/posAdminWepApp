import styles from './configPos.module.css';
import { POS_CONFIGS } from './const';

export default function ConfigPos() {
  return (
    <div className={styles.container}>
      <h1>Configuracion</h1>
      <div>
        {POS_CONFIGS.map((item, index) => (
          <div className={styles.cardAdminConfig} key={index}>
            <div className={styles.icon}>
              <img src={item.path} alt="icon" />
            </div>
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
