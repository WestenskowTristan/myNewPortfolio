import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import AnimatedText from "./Sections/AnimatedText";
import ThanksSection from "./Sections/ThanksSection";
import SectionSplitter from "./Components/SectionSpliter";
import MyWork from "./Sections/MyWork";

function App() {
  return (
    <div>
      <Navigation />
      <div className="portfolio-container">
        <AnimatedText
          lines={[
            "Software Developer",
            "Elevating user",
            "experiance through",
            "elegant code",
          ]}
          styles={[
            {
              fontSize: "1.5vw",
              fontFamily: "Crimson Pro, serif",
              marginBottom: "15px",
            },
            { fontSize: "9vw" },
            { fontSize: "9vw" },
            {
              fontSize: "13vw",
              fontFamily: "Crimson Pro, serif",
              fontStyle: "italic",
            },
          ]}
        />
        <SectionSplitter />
        <ThanksSection />
        <MyWork />
      </div>
    </div>
  );
}

export default App;
