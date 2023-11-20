import styles from "./banner.module.scss";

function Banner() {
  return (
    <section
      className={` d-flex justify-content-center align-items-center ${styles.banner}`}
    >
      <h2>
        <p>Actuellement:</p> <span>En recherche d&apos;opportunités</span>
      </h2>
    </section>
  );
}

export default Banner;
