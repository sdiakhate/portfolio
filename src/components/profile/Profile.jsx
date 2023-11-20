import styles from "./profile.module.scss";
import imgProfile from "../../assets/images/profile.png";

function Profile() {
  return (
    <article id="profile" className={` container  ${styles.article}`}>
      <h2 className="mb-20">A propos de moi...</h2>
      <section className="card p-20 d-flex flex-row">
        <div className={styles.imgContainer}>
          <img src={imgProfile} alt="profile" />
        </div>
        <p>
          Bonjour,
          <br />
          <br />
          Je suis <span>développeur Web junior</span> formé à{" "}
          <span>La Wild Code School</span> et vis actuellement sur Strasbourg.
          J&apos;ai travaillé pendant 3ans en tant que Professeur de Maths et de
          Sciences Numérique au Lycée. <span>En Formation</span> à la Wild et
          autodidacte depuis un an, je souhaiterais renforcer ces nouvelles
          compétences. D’un naturel <span>curieux, logique</span> et{" "}
          <span> pragmatique </span>
          j’aimerais intégrer un poste de <span>
            développeur Web frontEnd
          </span>{" "}
          afin de monter en compétence technique. Passionné par les
          technologies, les Maths et le monde qui nous entoure, je suis ouvert à{" "}
          <span>tous types de secteurs</span>.
        </p>
      </section>
      <div>
        <button className="my-30 btn btn-primary">
          <a href="#contact">CONTACTEZ-MOI</a>
        </button>
      </div>
    </article>
  );
}

export default Profile;
