import "../styles/Home.scss";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Contact from "./Contact";
import MyProjects from "./MyProjects";
import { useTheme } from "../context/ThemeContext";

function Home() {
    const { theme } = useTheme();

  return (
    <main className={`home ${theme}`}>
      <NavBar />
      <Header />
      <AboutMe />
      <Skills />
      <MyProjects />
      <Contact />
    </main>
  );
}

export default Home;
