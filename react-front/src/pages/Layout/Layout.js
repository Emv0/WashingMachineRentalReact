import {Outlet,Link} from "react-router-dom";
import { useEffect, useState } from "react";
import "./Layout.css";
import "./adminStyle.css";
import Footer from "../../components/Footer";
import ConsModal from "../../components/ModalCreate";
import AdminMenu from "../../components/AdminMenu";
import ModalLogin from "../../components/ModalLogin";

const Layout = ()=>{

    const [user, setUser] = useState(null);

    useEffect(()=>{
        const storedUser = JSON.parse(sessionStorage.getItem('user'))
        if(storedUser){
            setUser(storedUser)
        }
    },[])

    const logOut = (()=>{
        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('user');
        setUser(null);
    })

    const [flag,setFlag] =useState(0);
    const [menuVisible, setMenuVisible] = useState(false);
    const generateMenu = ()=>{
        setMenuVisible(!menuVisible);
    }
    const hideMenu = ()=>{
        setMenuVisible(false);
    }
    const [lgShow, setLgShow] = useState(false);
    const [loginModal, setLoginModal] = useState(false);

    const activeModal = ()=>{
        setFlag(0)
        document.body.classList.add('modal-open');
        setLgShow(true)
    }
    const closeModal = ()=>{
        setLgShow(false)
    }

    const showLoginModal = ()=>{
        setLoginModal(true)
    }

    const hideLoginModal = ()=>{
        setLoginModal(false)
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
                            <Link to='/reservaYa'className="link-item">Reserva Ya</Link>
                        </li>
                        <li>
                            <Link to='/reparaciones' className="link-item">Reparaciones</Link>
                        </li>
                        <li>
                            <Link to='/contactanos'className="link-item">Contactanos</Link>
                        </li>

                    </ul>
                </section>
            </nav>
            <i className="fa-solid fa-bars" id="menu-responsive" onClick={generateMenu} style={{color:"#ffffff", fontSize:"2.5rem"}}></i>
            {user ? <i className="fa-regular fa-square-caret-down admin-menu"  onPointerEnter={showAdmin}></i>:""}
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
            {
                user ?
                <section className="btn-container">
                    <p className="mt-3" style={{color:"#ffffff", fontWeight:"bold", fontSize:16.5}}>Bienvenido {user.name}</p>
                    <button style={{color:"#ffffff", fontWeight:"bold", fontSize:16.5}} className="logout-btn btn" onClick={logOut}>Cerrar sesión</button>
                </section>             
                
                :
                <section className="btn-container">
                <button className="btn" style={{color:"#ffffff", fontWeight:"bold", fontSize:16.5}} onClick={showLoginModal} >Iniciar sesión</button>
                <button className="register-btn" onClick={activeModal}>Registrarse</button>
            </section>
            }
        </header>
        <AdminMenu display={adminVisible} constAdmin={onAdminMenu} hideAdmin={hideAdmin}/>
        <ConsModal lgShow={lgShow} closeModal={closeModal} flag={flag}/>
        <ModalLogin loginModal={loginModal} hideLoginModal={hideLoginModal}/>
        <Outlet/>
        <Footer/>
    </div>
}

export default Layout;