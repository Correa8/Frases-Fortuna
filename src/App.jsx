import { useState } from "react";
import "./App.css";
import Frases from "./components/Frases";
import Fondos from "./components/Fondos";
import Loader from "./components/Loader";

import galleticas from "./data/galleticas.json";

function App() {
  const [index, setIndex] = useState(0);
  const [gif, setGif] = useState(false);
  const [load, setLoad] = useState(false);

  const base = (index) => {
    setIndex(index);
  };
  return (
    <>
      {load && <Loader />}

      {gif ? <Frases phrase={galleticas[index]} /> : " "}

      <Fondos
        base={base}
        phrase={galleticas.length}
        setGif={setGif}
        setLoad={setLoad}
      />
    </>
  );
}

export default App;
