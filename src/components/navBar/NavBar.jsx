import styles from "./navBar.module.scss";
import logo from "../../assets/images/logo_portfolio.png";
import PropTypes from "prop-types";

function Navbar({ showMenu, setShowMenu }) {
  return (
    <navbar className={`d-flex align-items-center ${styles.navbar} p-10`}>
      <img src={logo} alt="logo-portfolio" />
      <ul className={`d-flex ${styles.navbarXs}`}>
        <li>
          <a href="#accueil">Accueil</a>
        </li>
        <li>
          <a href="#profile">Profil</a>
        </li>
        <li>
          <a href="#skills">Compétences</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contacts</a>
        </li>
      </ul>
      <i
        onClick={() => {
          setShowMenu(!showMenu);
          console.log("yes");
        }}
        className={`fa-solid fa-bars ${styles.displayBar}`}
      ></i>
    </navbar>
  );
}
Navbar.propTypes = {
  setShowMenu: PropTypes.func.isRequired,
  showMenu: PropTypes.bool.isRequired,
};

export default Navbar;
