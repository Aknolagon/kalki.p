import "../styles/Home.scss";
import NavBar from "../components/Navbar";
import Header from "../components/Header";

function Home() {
  return (
    <main className="home">
      <nav><NavBar /></nav>
      <div><Header /></div>
    </main>
  );
}

export default Home;
