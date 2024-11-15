import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import Navbar from "../organisms/Navbar";
import syles from "Home.module.css";


const Home = () => {
  return (
    <div className={style.container}>
        <Header/>
        <Navbar/>
        <div className={styles.mainContainer}></div>
        <Footer/>
    </div>
  )
}

export default Home;
