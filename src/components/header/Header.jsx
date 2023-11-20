import styles from "./header.module.scss";
import Navbar from "../navBar/NavBar";
import Title from "./title/Title";
import { useState } from "react";
import MenuBurger from "../menuBurger/MenuBurger";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header id="accueil" className={`${styles.headerSection}`}>
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu && (
        <>
          <MenuBurger />
          <div onClick={() => setShowMenu(!showMenu)} className="calc"></div>
        </>
      )}
      <Title />
    </header>
  );
}

export default Header;
