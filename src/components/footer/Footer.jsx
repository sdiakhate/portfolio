import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer
      className={`d-flex justify-content-center align-items-center ${styles.footer}`}
    >
      <p>© Copyright 2023 | Serigne Saliou DIAKHATE | Tous droits réservés</p>
    </footer>
  );
}

export default Footer;
