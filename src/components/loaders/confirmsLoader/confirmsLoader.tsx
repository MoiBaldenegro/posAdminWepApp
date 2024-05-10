import styles from "./confirmLoader.module.css"
import tomateV from "../../../assets/Vector.svg"


export default function ConfirmLoader(){

    return(
        <div className={styles.container}>
            <div className={styles.spinner}></div>
            <img className={styles.tomate} src={tomateV} alt="tomate-logo" />
        </div>
        
    )
}