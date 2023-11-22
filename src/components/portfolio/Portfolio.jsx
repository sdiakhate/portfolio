import styles from "./portfolio.module.scss";
import imgPortfolio1 from "../../assets/images/portfolio1.png";
import imgPortfolio2 from "../../assets/images/portfolio2.png";
import imgPortfolio3 from "../../assets/images/portfolio3.png";
import { useState } from "react";

function Portfolio() {
  const [showModal, setShowModal] = useState(false);
  const [showModalC, setShowModalC] = useState(false);

  const handleMouseInter = () => {
    setShowModal(true);
  };
  return (
    <article id="portfolio" className={` container ${styles.portfolio}`}>
      <h2>Portfolio</h2>
      <section className="card p-20">
        <div
          onMouseOver={handleMouseInter}
          onMouseOut={() => setShowModal(false)}
        >
          <a
            target="_blank"
            href="https://atlas-home-two.vercel.app/"
            rel="noreferrer"
          >
            <img src={imgPortfolio1} alt="portfolio" />
          </a>
          {showModal && (
            <p
              className={`d-flex flex-column justify-content-center align-items-center ${styles.overlay}`}
            >
              <h3>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://atlas-home-two.vercel.app/"
                >
                  Atlas-Home
                </a>
              </h3>
              <p>Agence Immobilière: site web développé en React</p>
              <button className="btn btn-primary">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://atlas-home-two.vercel.app/"
                >
                  VISITEZ
                </a>
              </button>
            </p>
          )}
          <h3>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://atlas-home-two.vercel.app/"
            >
              Atlas-Home
            </a>
          </h3>
        </div>
        <div
          onMouseOver={() => setShowModalC(true)}
          onMouseOut={() => setShowModalC(false)}
        >
          <a
            href="https://cookinon.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={imgPortfolio2} alt="portfolio" />
          </a>
          {showModalC && (
            <p
              className={`d-flex flex-column justify-content-center align-items-center ${styles.overlay}`}
            >
              <h3>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://cookinon.vercel.app/"
                >
                  Cookinon
                </a>
              </h3>
              <p>Blog de cuisine: site web développé en React</p>
              <button className="btn btn-primary">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://cookinon.vercel.app/"
                >
                  VISITEZ
                </a>
              </button>
            </p>
          )}
          <h3>Cookinon</h3>
        </div>
        <div>
          <img src={imgPortfolio3} alt="portfolio" />
          <h3>Portfolio</h3>
        </div>
      </section>
    </article>
  );
}

export default Portfolio;
