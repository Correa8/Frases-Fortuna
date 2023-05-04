import { useState } from "react";
import "./fondos.css";

const Fondo = ({ base, phrase, setGif, setLoad }) => {
  const [img, setImg] = useState(0);

  const imagesFond = [
    "1.gif",
    "2.gif",
    "3.gif",
    "4.gif",
    "5.gif",
    "6.gif",
    "7.gif",
    "8.gif",
    "9.gif",
    "10.gif",
    "11.gif",
    "12.gif",
    "13.gif",
    "14.gif",
    "15.gif",
  ];

  const handleClick = () => {
    setTimeout(() => {
      setGif(false);
      setLoad(true);
    }, 1000);
    setTimeout(() => {
      setLoad(false);
      setGif(true);
    }, 2500);
    setTimeout(() => {
      const newIndex = Math.floor(Math.random() * phrase);
      base(newIndex);
      setImg(newIndex);
    }, 2700);
  };
  document.body.style = `background: url("./back/${imagesFond[img]} className="fondo" ");
         background-size:cover;
         background-repeat:no-repeat`;

  return (
    <div>
      <button onClick={handleClick} className="btn">
        {" "}
        ¡Ve por tu frase!
      </button>
    </div>
  );
};

export default Fondo;
