import "../styles/Home.scss";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Contact from "./Contact";

function Home() {
  return (
    <main className="home">
      <NavBar />
      <Header />
    <AboutMe />
    <Skills />
    <Contact />
    </main>
  );
}

export default Home;
