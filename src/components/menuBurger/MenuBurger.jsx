import styles from "./menuBurger.module.scss";

function MenuBurger() {
  return (
    <ul className={`p-5 ${styles.menuBurger}`}>
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
  );
}

export default MenuBurger;
