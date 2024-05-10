import styles from "./loader.module.css"
import tomateV from "../../assets/Vector.svg"



const Loader = () => {
    return (
        <div className={styles.container}>
            <img src={tomateV} alt="public-tomate" className={styles.tomate}/>
             <div className={styles.loader}>
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
                <div className={styles.bar3}></div>
                <div className={styles.bar4}></div>
                <div className={styles.bar5}></div>
                <div className={styles.bar6}></div>
                <div className={styles.bar7}></div>
                <div className={styles.bar8}></div>
                <div className={styles.bar9}></div>
                <div className={styles.bar10}></div>
                <div className={styles.bar11}></div>
                <div className={styles.bar12}></div>
            </div>
        </div>
     
    );
  };
  
  export default Loader;