import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Layout.css";
import "./adminStyle.css";
import logo from "../../assets/img/logo.png";
import Footer from "../../components/Footer/Footer";
import ConsModal from "../../components/ModalCreate";
import AdminMenu from "../../components/AdminMenu";
import ModalLogin from "../../components/ModalLogin";
import Avatar from "@mui/material/Avatar";

const Layout = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const logOut = () => {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("user");
    setUser(null);
  };

  const [flag, setFlag] = useState(0);
  const [menuVisible, setMenuVisible] = useState(false);
  const generateMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const hideMenu = () => {
    setMenuVisible(false);
  };
  const [lgShow, setLgShow] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const activeModal = () => {
    setFlag(0);
    document.body.classList.add("modal-open");
    setLgShow(true);
  };
  const closeModal = () => {
    setLgShow(false);
  };

  const showLoginModal = () => {
    setLoginModal(true);
  };

  const hideLoginModal = () => {
    setLoginModal(false);
  };

  const [adminVisible, setAdminVisible] = useState(false);

  const showAdmin = () => {
    setAdminVisible(true);
  };

  const hideAdmin = () => {
    setAdminVisible(false);
  };

  const onAdminMenu = () => {
    setAdminVisible(true);
  };

  return (
    <div>
      <header className="header-container">
        <Link to="/" className="name">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <nav className="nav-container">
          <section className="list-container">
            <ul>
              <li>
                <Link to="/reservaYa" className="link-item reserva">
                  Reserva Ya
                </Link>
              </li>
              <li>
                <Link to="/reparaciones" className="link-item">
                  Reparaciones
                </Link>
              </li>
              <li>
                <Link to="/contactanos" className="link-item">
                  Contactanos
                </Link>
              </li>
            </ul>
          </section>
        </nav>
        <i
          className="fa-solid fa-bars"
          id="menu-responsive"
          onClick={generateMenu}
          style={{ color: "#ffffff", fontSize: "2.5rem" }}
        ></i>
        {user ? (
          <i
            className="fa-regular fa-square-caret-down admin-menu"
            onPointerEnter={showAdmin}
          ></i>
        ) : (
          ""
        )}
        <div
          id="navResponsiveContainer"
          className="navResponsiveContainer"
          style={{ display: menuVisible ? "flex" : "none" }}
        >
          <nav className="nav_container-2">
            <section className="list_container-2">
              <ul>
                <li>
                  <Link to="/" className="link-item-r" onClick={hideMenu}>
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/reservaYa"
                    className="link-item-r"
                    onClick={hideMenu}
                  >
                    Reserva Ya
                  </Link>
                </li>
                <li>
                  <Link to="/reparaciones" className="link-item-r" onClick={hideMenu}>
                    Reparaciones
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contactanos"
                    className="link-item-r"
                    onClick={hideMenu}
                  >
                    Reparación
                  </Link>
                </li>
              </ul>
            </section>
          </nav>
        </div>
        {user ? (
          <section className="btn-container">
            <p
              className="mt-3 user"
              style={{ color: "#black", fontWeight: "bold", fontSize: 16.5 }}
            >
              <Avatar id="avatar" src="/broken-image.jpg" /> {user.name}
            </p>
            <button
              style={{ color: "black", fontWeight: "bold", fontSize: 16.5 }}
              className="logout-btn btn"
              onClick={logOut}
            >
              cerrar sesion
            </button>
          </section>
        ) : (
          <section className="btn-container">
            <button
              className="iniciar-btn btn"
              style={{ color: "#black", fontWeight: "bold", fontSize: 16.5 }}
              onClick={showLoginModal}
            >
              Iniciar sesión
            </button>
            <button className="register-btn btn" onClick={activeModal}>
              <div className="register">Registrate</div>
              <div className="letters">
                <span>R</span>
                <span>e</span>
                <span>g</span>
                <span>i</span>
                <span>s</span>
                <span>t</span>
                <span>r</span>
                <span>a</span>
                <span>t</span>
                <span>e</span>
              </div>
            </button>
          </section>
        )}
      </header>
      <AdminMenu
        display={adminVisible}
        constAdmin={onAdminMenu}
        hideAdmin={hideAdmin}
      />
      <ConsModal lgShow={lgShow} closeModal={closeModal} flag={flag} />
      <ModalLogin loginModal={loginModal} hideLoginModal={hideLoginModal} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
