import { useState } from "react";
import "../assets/adminStyle.css";
import ModalConsult from "./ModalConsult";


const AdminMenu = (props)=>{

    const [lgShowConsult, setShowConsult] = useState(false);
    
    const activeModalConsult = ()=>{
        setShowConsult(true)
    }

    const closeModal = ()=>{
        setShowConsult(false)
    }



    console.log(props.display)
    return<>
        <div className="container-admin" style={{display: props.display ? 'flex':'none'}} onMouseEnter={props.constAdmin} onMouseLeave={() => setTimeout(props.hideAdmin, 200)}>
            <div className="menu-class-close">
                <i className="fa-regular fa-circle-xmark menu-close" style={{color:"#ffffff",fontSize:"2.0rem"}} onClick={props.hideAdmin}></i>
            </div>
            <ul className="ul-admin">
                <li className="li-admin" onClick={activeModalConsult}><i className="fa-solid fa-users fa-mar" style={{color: "#ffffff", fontSize:"2.3rem"}}></i>Ver Usuarios</li>
                <li className="li-admin"><i className="material-symbols-outlined fa-mar" style={{color: "#ffffff",fontSize:"2.3rem"}}>dishwasher_gen</i>Ver Lavadoras</li>
                <li className="li-admin"><i className="fa-solid fa-plus fa-mar" style={{color: "#ffffff",fontSize:"2.3rem"}}></i>Registrar Lavadoras</li>
            </ul>
        </div>
        <ModalConsult lgShowConsult={lgShowConsult} closeModalConsult={closeModal}/>
    </>
}

export default AdminMenu;