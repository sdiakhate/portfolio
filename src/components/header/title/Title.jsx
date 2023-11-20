import styles from "./title.module.scss";
import MovingText from "react-moving-text";

function Title() {
  return (
    <div
      id="accueil"
      className={`d-flex justify-content-center align-items-center ${styles.content}`}
    >
      <div className={styles.titleContent}>
        <MovingText type="flip" duration="2000ms" iteration="1" delay="3s">
          <h1>Serigne Saliou Diakhaté</h1>
        </MovingText>
        <MovingText type="slideInFromRight" duration="4000ms" iteration="1">
          <p>développeur web - intégrateur</p>
        </MovingText>
        <MovingText
          type="slideInFromTop"
          duration="4000ms"
          iteration="1"
          delay="4s"
        >
          <div className="d-flex justify-content-center p-20">
            <button className="btn btn-reverse-primary mr-20">
              <a href="#profile">QUI SUIS-JE</a>
            </button>
            <button className="btn btn-primary">
              <a href="#contact">CONTACTEZ-MOI</a>
            </button>
          </div>
        </MovingText>
      </div>
    </div>
  );
}

export default Title;
