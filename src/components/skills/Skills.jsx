import styles from "./skills.module.scss";
import cvWebDev from "../../assets/images/CvDevWeb.png";
import imgHTML from "../../assets/images/css-3.png";
import scssImg from "../../assets/images/sass.png";
import imgJS from "../../assets/images/technology.png";
import imgREACT from "../../assets/images/atom.png";
import imgMYSQL from "../../assets/images/mysql.png";
import imgDatabase from "../../assets/images/database.png";
import imgExpresse from "../../assets/images/express.png";
import cvDevWebPdf from "../../assets/images/CvDevWeb.pdf";

function Skills() {
  return (
    <article id="skills" className={`container ${styles.skills}`}>
      <h2>Compétences</h2>
      <div className={`card p-20 ${styles.content}`}>
        <section className="d-flex flex-column">
          <div className={styles.icon}>
            <h3>Front-End</h3>
            <ul className="d-flex">
              <li>
                <h4>HTML</h4>
                <img src={imgHTML} alt="" />
              </li>
              <li>
                <h4>CSS/SASS</h4>
                <img src={scssImg} alt="" />
              </li>
              <li>
                <h4>JAVASCRIPT</h4>
                <img src={imgJS} alt="" />
              </li>
              <li>
                <h4>REACT</h4>
                <img src={imgREACT} alt="" />
              </li>
            </ul>
          </div>
          <div className={styles.icon}>
            <h3>Back-End</h3>
            <ul className="d-flex">
              <li>
                <h4>MYSQL</h4>
                <img src={imgMYSQL} alt="" />
              </li>
              <li>
                <h4>EXPRESS</h4>
                <img src={imgExpresse} alt="" />
              </li>
              <li>
                <h4>MONGODB</h4>
                <img src={imgDatabase} alt="" />
              </li>
            </ul>
          </div>
        </section>
        <img src={cvWebDev} alt="cv" />
      </div>
      <div className={styles.download}>
        <button className="btn btn-primary">
          <a target="_self" href={cvDevWebPdf} download>
            Télécharger CV
          </a>
        </button>
      </div>
    </article>
  );
}

export default Skills;
