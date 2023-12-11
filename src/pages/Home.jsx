import "../styles/Home.scss";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import AboutMe from "./AboutMe";

function Home() {
  return (
    <main className="home">
      <nav><NavBar /></nav>
      <div><Header /></div>
      <div><AboutMe /></div>
    </main>
  );
}

export default Home;
