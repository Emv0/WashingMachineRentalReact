import {Outlet,Link} from "react-router-dom";
import "../assets/style.css"
import Footer from "../components/Footer";

const Layout = ()=>{
    return<div>
        <header className="header-container">
            <Link to='/'className="name">Nombre de la empresa</Link> 
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