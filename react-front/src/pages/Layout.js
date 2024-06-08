import {Outlet,Link} from "react-router-dom";
import { useState } from "react";
import "../assets/style.css";
import "../assets/adminStyle.css";
import Footer from "../components/Footer";
import ConsModal from "../components/ModalCreate";
import AdminMenu from "../components/AdminMenu";

const Layout = ()=>{

    const [flag,setFlag] =useState(0)
    const [menuVisible, setMenuVisible] = useState(false);
    const generateMenu = ()=>{
        setMenuVisible(!menuVisible)
    }
    const hideMenu = ()=>{
        setMenuVisible(false)
    }
    const [lgShow, setLgShow] = useState(false);

    const activeModal = ()=>{
        setFlag(0)
        document.body.classList.add('modal-open');
        setLgShow(true)
    }
    const closeModal = ()=>{
        setLgShow(false)
    }

    const [adminVisible,setAdminVisible] = useState(false)

    const showAdmin = ()=>{
        setAdminVisible(true);
    }

    const hideAdmin = ()=>{
        setAdminVisible(false);
    }

    const onAdminMenu = ()=>{
        setAdminVisible(true)
    }

    

    return<div>
        <header className="header-container">
            <Link to='/'className="name">LAVAEXPRESS</Link> 
            <nav className="nav-container">
                <section className="list-container">
                    <ul>
                        <li>
                            <Link to='/LavaConNosotros'className="link-item">Lava con nosotros</Link>
                        </li>
                        <li>
                            <Link to='/Sedes' className="link-item">Sedes</Link>
                        </li>
                        <li>
                            <Link to='/Reparacion'className="link-item">Reparación</Link>
                        </li>
                        <li>
                            <Link to='/Nosotros' className="link-item">Sobre Nosotros</Link>
                        </li>
                    </ul>
                </section>
            </nav>
            <i className="fa-solid fa-bars" id="menu-responsive" onClick={generateMenu} style={{color:"#ffffff;", fontSize:"2.5rem"}}></i>
            <i className="fa-regular fa-square-caret-down admin-menu"  onPointerEnter={showAdmin}></i>
            <div id="navResponsiveContainer" className="navResponsiveContainer" style={{display: menuVisible ? "flex" : "none"}}>
                <nav className="nav_container-2">
                    <section className="list_container-2">
                        <ul>
                            <li>
                                <Link to='/' className="link-item" onClick={hideMenu}>Inicio</Link>
                            </li>
                            <li>
                                <Link to='/LavaConNosotros'className="link-item" onClick={hideMenu}>Lava con nosotros</Link>
                            </li>
                            <li>
                                <Link to='/Sedes' className="link-item" onClick={hideMenu}>Sedes</Link>
                            </li>
                            <li>
                                <Link to='/Reparacion'className="link-item"onClick={hideMenu}>Reparación</Link>
                            </li>
                            <li>
                                <Link to='/Nosotros' className="link-item"onClick={hideMenu}>Sobre Nosotros</Link>
                            </li>
                        </ul>
                    </section>
                </nav>
            </div>
            <section className="btn-container">
                <Link to='/IniciarSesion' className="link-item">Iniciar sesión</Link>
                <button className="register-btn" onClick={activeModal}>Registrarse</button>
            </section>
        </header>
        <AdminMenu display={adminVisible} constAdmin={onAdminMenu} hideAdmin={hideAdmin}/>
        <ConsModal lgShow={lgShow} closeModal={closeModal} flag={flag}/>
        <Outlet/>
        <Footer/>
    </div>
}

export default Layout;