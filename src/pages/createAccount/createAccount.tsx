import styles from "./createAccount.module.css"
// Dependencies
import { NavLink } from "react-router-dom";
// hooks
import { useState } from "react";
import { useDispatch } from "react-redux"
// icons
import tomateLogo from "../../assets/loginPage/tomateLogo.svg";
import { createUser } from "../../redux/actions/auth";


export default function createAccount (){
    const dispatch = useDispatch();
    const [  user, setUser ]:any = useState({
        email: "",
        password: ""
    });

    const handleSubmit = () => {
        event?.preventDefault();
        dispatch(createUser(user))
    }

    const handleChange = () => {
        
        event?.preventDefault();
        setUser({
            ...user,
            [event.target.name] : event?.target.value
            
        }) 
        console.log(user);
    }
    const { loginUsers }= useSelector(state => state.auth);

    if(loginUsers.length > 0){
      return <Navigate to="/home" />
    }

     return (
      <div className={styles.loginPage}>
      <main className={styles.centerContainer}>
              <img src={tomateLogo} alt="" />
          
          <div className={styles.formContainer}>
              <span className={styles.formTittle} >Create account</span>
              <div className={styles.form}>
                  <input value={user.email} name="email" placeholder="correo@ejemplo.com" type="text" onChange={handleChange} className={styles.inputForm}/>
                  <input value={user.password}  name="password" placeholder="password" type="text" onChange={handleChange}  className={styles.inputForm} />
                  <button onClick={handleSubmit} type="submit" className={styles.btnEntrar}>CREATE</button>
                  <button  className={styles.btnBack} ><NavLink to="/login" className={styles.btnBackLink} >Back</NavLink></button>
              </div>
          </div>
      </main>
  </div>  
     )
}