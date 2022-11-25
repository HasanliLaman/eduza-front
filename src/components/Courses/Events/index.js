import React from "react";
import StyleEvents from "./style";

const Events = (props) => {
  return (
    <StyleEvents>
      <div className="category">{props.category}</div>
      <img src={props.img} alt="event" />
      <div>
        <article>
          <p>Sunday 5:00 pm - 6:00 pm EDT</p>
          <span>{props.title}</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.
            Felis donec massa aliquam id.
          </p>
        </article>
        <div className="date">
          <span>{props.month}</span>
          <p>{props.date}</p>
        </div>
      </div>
    </StyleEvents>
  );
};

export default Events;
