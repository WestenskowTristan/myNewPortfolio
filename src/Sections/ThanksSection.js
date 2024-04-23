import "./ThanksSection.css";
import Image from "../Images/computer-program-coding-screen_53876-138060.avif";
import Button from "../Components/Button";

const ThanksSection = () => {
  return (
    <div className="thanksContainer">
      <div className="thanksLeftContainer">
        <div className="leftContent">
          <div className="thanksHeader">Thanks for stopping by!</div>
          <div className="thanksSum">
            I am a web/mobile app developer based out of Salt Lake City, Ut. I
            learned my Dev skills through the University of Utah in 2021, since
            I have been learning and growing as much as I can with new
            technologies.
          </div>
        </div>
        <Button
          text="More Info"
          className={"thanksButton"}
          onClick={() => {
            console.log("hello");
          }}
        />
      </div>
      <div className="thanksRightContainer">
        <img className="thanksImage" src={Image} alt="Computer Coding" />
      </div>
    </div>
  );
};

export default ThanksSection;
