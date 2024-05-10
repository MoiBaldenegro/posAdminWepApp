import { useState } from "react";



export default function useAside () {
    const [ main, setMain ] = useState("");
    const [ active, setActive ] = useState(true)
    const [ redLinePosition, setRedLinePosition] = useState(5);
    // para el boton externo
    //const toggle = main === "ventas" ? "hidden" : "ventas";
    const toggle = main === "catalogo" ? "hidden" : "catalogo"
    
   /*const openMenu = (value:any, activeValue:any, positionLine :any ) => {
        setMain(value)
        setActive(activeValue)
        setRedLinePosition(positionLine)
    }
*/    //para los elementos internos

    
    const handleBoard = (value:any, activeValue:any, positionLine :any) => {
        setMain(value)
        setActive(activeValue)
        setRedLinePosition(positionLine)
        
    }; 
    return [ handleBoard, main, active, redLinePosition, toggle ];
}