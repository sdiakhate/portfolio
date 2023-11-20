import styles from "./form.module.scss";
function Form() {
  return (
    <div
      id="contact"
      className={`container p-20 d-flex flex-column justify-content-center align-items-center ${styles.content}`}
    >
      <h2>Contactez-moi </h2>
      <div className={`${styles.contact} card p-30`}>
        <form>
          <input type="text" name="lastName" id="lastName" placeholder="Nom" />
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Prénom"
          />
          <input type="email" name="email" id="email" placeholder="email" />
          <textarea
            name="message"
            id="message"
            placeholder="Message"
          ></textarea>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
              className="btn btn-primary "
            >
              Soumettre
            </button>
          </div>
        </form>
        <section className={styles.infos}>
          <div className={styles.infosContent}>
            <p>
              <i className="fa-solid fa-envelope mr-15"></i>
              diakhate.ssaliou@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-phone mr-15"></i>06 52 79 17 74
            </p>
            <p>
              <i className="fa-solid fa-house mr-15"></i>67200 Strasbourg
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Form;
