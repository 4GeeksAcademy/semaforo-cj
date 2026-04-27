import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const TrafficLight = () => {
  
  const [color, setColor] = useState("red");
  
  
  const [lights, setLights] = useState(["red", "yellow", "green"]);

 
  const toggleColor = () => {
    const currentIndex = lights.indexOf(color);
   
    const nextIndex = (currentIndex + 1) % lights.length;
    setColor(lights[nextIndex]);
  };

  
const addBlueLight = () => {
  if (!lights.includes("blue")) { 
    setLights([...lights, "blue"]);
  }
};

  return (
    <div id="app">
     
      <div id="trafficTop"></div>
      
      
      <div id="container">
        {lights.map((lightColor, index) => (
          <div
            key={index}
            // Comprobamos si el color actual del map es el seleccionado para añadir la clase
            className={`${lightColor} light ${color === lightColor ? "selected" : ""}`}
            onClick={() => setColor(lightColor)}
          ></div>
        ))}
      </div>

      
      <div className="bonus-buttons">
        <button onClick={toggleColor}>Alternar Color</button>
        <button onClick={addblueLight}>Añadir blue</button>
      </div>
    </div>
  );
};

// Renderizado en el DOM tal como lo piden las instrucciones
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<TrafficLight />);