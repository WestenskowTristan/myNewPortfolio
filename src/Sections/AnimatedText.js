import React, { useState, useEffect } from "react";
import "./AnimatedText.css";

const AnimatedText = ({ lines, styles }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="animated-text-container">
      {lines.map((text, index) => (
        <div
          key={index}
          className={`animated-text-line ${
            index % 2 === 0 ? "animate-right" : "animate-left"
          }`}
          style={styles && styles[index]}
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default AnimatedText;
