import React from "react";
import StylePlan from "./style";

const Plan = (props) => {
  return (
    <StylePlan>
      <img alt="icon" src={props.img} />
      <header>{props.name}</header>
      <p>{props.price} AZN per month</p>
      <ul>
        {props.features.map((el) => (
          <li key={el}>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 6.71484L9 17.7148L4 12.7148"
                stroke={props.color}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>{el}</p>
          </li>
        ))}
      </ul>
    </StylePlan>
  );
};

export default Plan;
