import { Outlet } from "react-router-dom";


import style from "./main.module.css"


export default function Main () {

    return(
        <section className={style.container}>
                <Outlet/> 
        </section>
    )
}