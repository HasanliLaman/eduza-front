import React from "react";
import StyleNewsletter from "./style";
import mail from "../../../assets/images/footer-newsletter.svg";

const Newsletter = () => {
  return (
    <StyleNewsletter>
      <div>
        <img src={mail} alt="mail" />
        <header>Xəbər bülletenimizə abunə olun</header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmo.
        </p>
      </div>
      <div className="newsletter">
        <input type="text" placeholder="Emailinizi daxil edin" />
        <button>Göndər</button>
      </div>
    </StyleNewsletter>
  );
};

export default Newsletter;
