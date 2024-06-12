import { useState } from "react";
import "../pages/Layout/adminStyle.css";
import ModalConsult from "./ModalConsult";
import ModalCreate from "./ModalCreate";


const AdminMenu = (props)=>{

    const [lgShowConsult, setShowConsult] = useState(false);
    const [modalCreate, setModalCreate] = useState(false);
    const [flag,setFlag] =useState(false)
    
    const activeModalConsult = ()=>{
        setShowConsult(true)
    }

    const closeModal = ()=>{
        setShowConsult(false)
    }

    const openModalCreate = ()=>{
        setModalCreate(true)
        setFlag(true);
    }

    const closeModalClose = ()=>{
        setModalCreate(false)
    }

    console.log(props.display)
    return<>
        <div className="container-admin" style={{display: props.display ? 'flex':'none'}} onMouseEnter={props.constAdmin} onMouseLeave={() => setTimeout(props.hideAdmin, 200)}>
            <div className="menu-class-close">
                <i className="fa-regular fa-circle-xmark menu-close" style={{color:"#ffffff",fontSize:20}} onClick={props.hideAdmin}></i>
            </div>
            <ul className="ul-admin">
                <li className="li-admin" onClick={openModalCreate}><i className="fa-solid fa-user-plus fa-mar" style={{color:"#ffffff",fontSize:23}}></i>Registrar Usuario</li>
                <li className="li-admin" onClick={activeModalConsult}><i className="fa-solid fa-users fa-mar" style={{color: "#ffffff", fontSize:23}}></i>Ver Usuarios</li>
                <li className="li-admin"><i className="material-symbols-outlined fa-mar" style={{color: "#ffffff",fontSize:23}}>dishwasher_gen</i>Ver Lavadoras</li>
                <li className="li-admin"><i className="fa-solid fa-plus fa-mar" style={{color: "#ffffff",fontSize:23}}></i>Registrar Lavadoras</li>
            </ul>
        </div>
        <ModalCreate lgShow={modalCreate} closeModal={closeModalClose} flag={flag}/>
        <ModalConsult lgShowConsult={lgShowConsult} closeModalConsult={closeModal}/>
    </>
}

export default AdminMenu;