/* import { useDispatch, useSelector } from "react-redux"
import styles from "./usuarios.module.css"
import { useEffect } from "react"
import { getUsers } from "../../../redux/actions"




export default function Usuarios (){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getUsers());
    }, [])
    const allUsers = useSelector(state => state.allUsers)
    return(
        <section className={styles.contenedor}>
            { 
             allUsers?.map(user => ( 
                <div key={user.email}>
                    <h1> User : { user.email}  </h1>
                    <h2> Rol: { user.role }</h2>
                    <h3> Desde {user.createdAt}</h3>
                </div>
                ))   
            }   
        </section>
    )
}  */