import React from "react";
import WorkComponent from "../Components/WorkComponent";

const MyWork = () => {
  return (
    <div>
      <WorkComponent text={"Cryptic Kingz"} />
      <WorkComponent invert={true} text={"Blueroof360"} />
      <WorkComponent text={"BrivityGo"} />
      <WorkComponent invert={true} text={"BrivityHome"} />
    </div>
  );
};

export default MyWork;
