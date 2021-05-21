import { useState } from "react";

import "./App.css";
import Menu from "./components/Menu";
import Header from "./components/Header";

function App() {
  const [flavor, setFlavor] = useState("");

  const setFlavorAll = () => {
    setFlavor("");
  };

  const setFlavorSalty = () => {
    setFlavor("salty");
  };

  const setFlavorSweet = () => {
    setFlavor("sweet");
  };

  return (
    <div className="App">
      <Header
        flavor={flavor}
        setFlavorAll={setFlavorAll}
        setFlavorSalty={setFlavorSalty}
        setFlavorSweet={setFlavorSweet}
      ></Header>

      <div id="items-container">
        <Menu flavor={flavor}></Menu>
      </div>
    </div>
  );
}

export default App;
