import styles from "./tomateLoader.module.css"

const TomateLoader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
    
  );
};

export default TomateLoader;