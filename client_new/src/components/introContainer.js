import React from "react";
import "../App.scss";

function IntroContainer() {
  return (
    <div className="intro-container">
      <div className="intro-headline">
        We don't know much about the food that we eat these days...
        <br />
        <span className="highlight-text">
          and we think that's rather fishy.
        </span>
      </div>
      <div className="intro-text-top">
        <strong>
          The seafood you eat has a story far beyond the styrofoam tray it came
          on.
        </strong>
      </div>
      <div className="intro-text-bottom">
        Select a fish below to learn more about where it came from, challenges
        its population is facing, and things you should keep in mind when
        consuming it.
      </div>
    </div>
  );
}

export default IntroContainer;
