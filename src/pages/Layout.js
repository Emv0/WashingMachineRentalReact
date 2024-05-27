import {Outlet,Link} from "react-router-dom";
import { useState } from "react";
import "../assets/style.css"
import Footer from "../components/Footer";


const Layout = ()=>{

    const [menuVisible, setMenuVisible] = useState(false)
    const generateMenu = ()=>{
        setMenuVisible(!menuVisible)
    }
    const hideMenu = ()=>{
        setMenuVisible(false)
    }
    return<div>
        <header className="header-container">
            <Link to='/'className="name">Nombre</Link> 
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
            <i class="fa-solid fa-bars" id="menu-responsive" onClick={generateMenu} style={{color:"#ffffff;", fontSize:"2.5rem"}}></i>
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
            <section class="btn-container">
                <Link to='/IniciarSesion' className="link-item">Iniciar sesión</Link>
                <button className="register-btn">Registrarse</button>
            </section>
        </header>
        <Outlet/>
        <Footer/>
    </div>
}

export default Layout;