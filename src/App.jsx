import styles from "./App.module.scss";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Banner from "./components/banner/Banner";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Form from "./components/contact/Form";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Profile />
      <Banner />
      <Skills />
      <Portfolio />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
