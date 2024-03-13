import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import AnimatedText from "./Components/AnimatedText";

function App() {
  return (
    <div>
      <Navigation />
      <div className="portfolio-container"></div>
      <AnimatedText
        lines={[
          "Software Developer",
          "Elevating user",
          "experiance through",
          "elegant code",
        ]}
        styles={[
          {
            fontSize: "min(2vw, 16px)",
            fontFamily: "Crimson Pro, serif",
            marginBottom: "15px",
          },
          { fontSize: "min(12vw, 96px)" },
          { fontSize: "min(12vw, 96px)" },
          {
            fontSize: "min(16vw, 128px)",
            fontFamily: "Crimson Pro, serif",
            fontStyle: "italic",
          },
        ]}
      />
    </div>
  );
}

export default App;
