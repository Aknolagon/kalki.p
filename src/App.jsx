import { Outlet } from "react-router-dom";
import "../src/styles/App.scss";

function App() {
  return (
      <main>
        <Outlet />
      </main>
  );
}

export default App;
