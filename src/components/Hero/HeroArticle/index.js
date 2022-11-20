import React from "react";
import StyleHeroArticle from "./style";
import Button from "../../UI/Button";

const HeroArticle = () => {
  return (
    <StyleHeroArticle>
      <h1>Grow your skills, define your future</h1>
      <p>
        Presenting Academy, the tech school of the future. We teach you the
        right skills to be prepared for tomorrow.
      </p>
      <div className="buttons">
        <Button text="Explore courses" isPrimary={true} />
        <Button text="Learn more" isPrimary={false} />
      </div>
    </StyleHeroArticle>
  );
};

export default HeroArticle;
