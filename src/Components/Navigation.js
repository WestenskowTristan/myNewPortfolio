import React from "react";
import { Menu, Star } from "react-feather";

const Navigation = () => {
  return (
    <nav style={navStyle}>
      <div style={nameContainer}>
        <div style={firstNameStyle}>Tristan</div>
        <div style={lastNameContainer}>
          <Star style={starIconStyles} size={14} stroke="#B74803" />
          <div style={lastNameStyle}>Westenskow</div>
        </div>
      </div>
      <div style={rightSideStyle}>
        <Menu size={24} stroke="#A3B4C8" />
      </div>
    </nav>
  );
};

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  paddingLeft: "50px",
  paddingRight: "50px",
  paddingTop: "25px",
};

const nameContainer = {
  display: "flex",
  flexDirection: "column",
};

const firstNameStyle = {
  fontFamily: "Crimson Text serrif",
  fontSize: "1.5rem",
  marginBottom: "0.2rem",
  color: "#A3B4C8",
};

const lastNameContainer = {
  display: "flex",
};

const starIconStyles = {
  marginRight: "5px",
};

const lastNameStyle = {
  fontFamily: "Crimson Text serrif",
  fontSize: "1.5rem",
  color: "#A3B4C8",
  marginTop: "3px",
};

const rightSideStyle = {
  cursor: "pointer",
};

export default Navigation;
