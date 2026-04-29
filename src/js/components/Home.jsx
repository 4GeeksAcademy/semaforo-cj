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
    // ✅ Evita duplicados
    if (!lights.includes("blue")) {
      setLights([...lights, "blue"]);
    }
  };

  return (
    <div id="app">
      <div id="trafficTop"></div>

      <div id="container">
        {lights.map((lightColor) => (
          <div
            key={lightColor} // ✅ mejor que index
            className={`light ${lightColor} ${
              color === lightColor ? "selected" : ""
            }`}
            onClick={() => setColor(lightColor)}
          ></div>
        ))}
      </div>

      <div className="bonus-buttons">
        <button onClick={toggleColor}>Alternar Color</button>
        <button onClick={addBlueLight}>Añadir blue</button>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<TrafficLight />);