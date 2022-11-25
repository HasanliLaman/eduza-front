import React from "react";
import StyleNewsletter from "./style";
import mail from "../../../assets/images/footer-newsletter.svg";

const Newsletter = () => {
  return (
    <StyleNewsletter>
      <div>
        <img src={mail} alt="mail" />
        <header>Subscribe to our newsletter</header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmo.
        </p>
      </div>
      <div className="newsletter">
        <input type="text" placeholder="Enter your mail" />
        <button>Submit</button>
      </div>
    </StyleNewsletter>
  );
};

export default Newsletter;
