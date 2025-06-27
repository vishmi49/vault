import Navbar from "./components/header/Navbar";
import Main from "./components/bgLayers/Main";
import Services from "./components/services/services";
import "./App.css";

function App() {
  return (
    <div className="pt-20">
      <Navbar />
      <Main />
      <Services />
    </div>
  );
}

export default App;
