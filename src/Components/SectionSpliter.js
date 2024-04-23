import React, { useState, useEffect } from "react";
import { Cpu } from "react-feather";

const SectionSplitter = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const rotationValue = scrollPosition / 5;

      setRotation(rotationValue);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={sectionSplitterStyle}>
      <div style={iconStyles}>
        <Cpu
          size={36}
          stroke="#CC6D3D"
          style={{
            animation: `spin 1s linear infinite`,
            transform: `rotate(${rotation}deg)`,
          }}
        />
      </div>
    </div>
  );
};

const sectionSplitterStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "60vh",
};

const iconStyles = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
};

export default SectionSplitter;
