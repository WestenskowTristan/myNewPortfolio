import React, { useRef } from "react";
import Image from "../Images/computer-program-coding-screen_53876-138060.avif";

const WorkComponent = ({ text, invert }) => {
  const imageContainerRef = useRef(null);

  const handleMouseMove = (event) => {
    const container = imageContainerRef.current;
    const containerRect = container.getBoundingClientRect();
    const mouseX = event.clientX - containerRect.left;
    const mouseY = event.clientY - containerRect.top;
    const rotateX = (mouseY / containerRect.height - 0.5) * 20;
    const rotateY = (mouseX / containerRect.width - 0.5) * 20;

    container.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    imageContainerRef.current.style.transform = "none";
  };

  const workContainerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    height: "auto",
    position: "relative",
    marginLeft: invert ? "unset" : "13vw",
    marginRight: invert ? "13vw" : "unset",
    marginBottom: "300px",
  };

  const imageContainerStyle = {
    gridColumn: invert ? "2" : "1",
    height: "auto",
    perspective: "1000px",
    transition: "transform 0.1s ease",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
  };

  const textContainerStyle = {
    gridColumn: invert ? "1" : "2",
    position: "absolute",
    bottom: "-17px",
    right: invert ? "unset" : "115px",
    width: "80%",
    padding: `0 ${invert ? "10px" : "0"} ${invert ? "0" : "0 10px"}`,
  };

  const workTextStyle = {
    fontSize: "6vw",
    fontFamily: "Crimson Pro, serif",
    color: "#a3b4c8",
  };

  return (
    <div style={workContainerStyle}>
      <div
        style={imageContainerStyle}
        ref={imageContainerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img style={imageStyle} src={Image} alt="Work Image" />
      </div>
      <div style={textContainerStyle}>
        <div style={workTextStyle}>{text}</div>
      </div>
    </div>
  );
};

export default WorkComponent;
