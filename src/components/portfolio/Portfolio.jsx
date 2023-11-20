import styles from "./portfolio.module.scss";
import imgPortfolio1 from "../../assets/images/portfolio1.png";
import imgPortfolio2 from "../../assets/images/portfolio2.png";
import imgPortfolio3 from "../../assets/images/portfolio3.png";

function Portfolio() {
  return (
    <article id="portfolio" className={` container ${styles.portfolio}`}>
      <h2>Portfolio</h2>
      <section className="card p-20">
        <div>
          <a
            target="_blank"
            href="https://atlas-home-two.vercel.app/"
            rel="noreferrer"
          >
            <img src={imgPortfolio1} alt="portfolio" />
          </a>
          <h3>Atlas-Home</h3>
        </div>
        <div>
          <a
            href="https://cookinon.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={imgPortfolio2} alt="portfolio" />
          </a>
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
