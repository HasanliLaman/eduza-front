import React from "react";
import StyleCategoryComponent from "./style";
import quantityImg from "../../../../assets/images/course-quantity.svg";

const CategoryComponent = ({ img, quantity, name }) => {
  return (
    <StyleCategoryComponent>
      <div className="quantity">
        <img src={quantityImg} alt="quantity" />
        <p>{quantity} courses</p>
      </div>
      <img src={img} alt="category" />
      <div className="content">
        <span>{name}</span>
        <p>
          Lorem ipsum dolor sit amet, dolor sit consectetur adipiscing elit.
        </p>
      </div>
    </StyleCategoryComponent>
  );
};

export default CategoryComponent;
