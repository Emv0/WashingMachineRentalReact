import { useState } from "react";
import "../pages/Layout/adminStyle.css";
import ModalConsult from "./ModalConsult";
import ModalCreate from "./ModalCreate";
import ModalCreateMachine from "./ModalCreateMachine";


const AdminMenu = (props)=>{

    const [lgShowConsult, setShowConsult] = useState(false);
    const [modalCreate, setModalCreate] = useState(false);
    const [modalCreateMachine, setModalCreateMachine] = useState(false);
    const [flag,setFlag] = useState(0)
    
    const activeModalConsult = ()=>{
        setShowConsult(true)
    }

    const closeModal = ()=>{
        setShowConsult(false)
    }

    const openModalCreate = ()=>{
        setModalCreate(true)
        setFlag(1);
    }

    const closeModalConsult = ()=>{
        setModalCreate(false)
    }

    const openModalCreateMachine = ()=>{
        setModalCreateMachine(true)
    }

    const closeModalMachine = ()=>{
        setModalCreateMachine(false)
    }

    return<>
        <div className="container-admin" style={{display: props.display ? 'flex':'none'}} onMouseEnter={props.constAdmin} onMouseLeave={() => setTimeout(props.hideAdmin, 200)}>
            <div className="menu-class-close">
                <i className="fa-regular fa-circle-xmark menu-close" style={{color:"#ffffff",fontSize:20}} onClick={props.hideAdmin}></i>
            </div>
            <ul className="ul-admin">
                <li className="li-admin" onClick={openModalCreate}><i className="fa-solid fa-user-plus fa-mar" style={{color:"#ffffff",fontSize:23}}></i>Registrar Usuario</li>
                <li className="li-admin" onClick={activeModalConsult}><i className="fa-solid fa-users fa-mar" style={{color: "#ffffff", fontSize:23}}></i>Ver Usuarios</li>
                <li className="li-admin" onClick={openModalCreateMachine}><i className="fa-solid fa-plus fa-mar" style={{color: "#ffffff",fontSize:23}}></i>Registrar Lavadoras</li>
            </ul>
        </div>
        <ModalCreateMachine modalCreateMachine={modalCreateMachine} closeModalMachine={closeModalMachine}/>
        <ModalCreate lgShow={modalCreate} closeModal={closeModalConsult} flag={flag}/>
        <ModalConsult lgShowConsult={lgShowConsult} closeModalConsult={closeModal}/>
    </>
}

export default AdminMenu;