import React from "react";
import CategoryComponent from "../CategoryComponent";
import StyleAllCategories from "./style";
import Container from "../../../UI/Container";
import category1 from "../../../../assets/images/category1.svg";
import category2 from "../../../../assets/images/category2.svg";
import category3 from "../../../../assets/images/category3.svg";

const AllCategories = () => {
  return (
    <StyleAllCategories>
      <Container>
        <h2>Müxtəlif kategoriyalı kurslara baxın</h2>
        <div className="categories">
          <CategoryComponent name="Fizika" quantity={5} img={category1} />
          <CategoryComponent name="Kimya" quantity={12} img={category2} />
          <CategoryComponent name="Riaziyyat" quantity={7} img={category3} />
        </div>
      </Container>
    </StyleAllCategories>
  );
};

export default AllCategories;
