import React from "react";
import Container from "../../../UI/Container";
import Plan from "../Plan";
import StylePlansContainer from "./style";
import basic from "../../../../assets/images/plan-basic.svg";
import premium from "../../../../assets/images/plan-premium.svg";
import advanced from "../../../../assets/images/plan-advanced.svg";

const PlansContainer = () => {
  return (
    <StylePlansContainer>
      <Container>
        <h2>Təhsil paketləri</h2>
        <div className="plans">
          <Plan
            img={basic}
            name="Basic"
            price="79"
            color="#064ea4"
            features={[
              "Access to 3 recorded lessons",
              "Access to the quizzes of 3 lessons",
              "No live stream enrollment",
            ]}
          />
          <Plan
            img={premium}
            name="Premium"
            price="169"
            color="#fcdf69"
            features={[
              "Access to 5 recorded lessons",
              "Access to the quizzes of 5 lessons",
              "Access to 2 live streaming lessons",
              "Additional reading materials and tests",
              "Weekly generated exams",
            ]}
          />
          <Plan
            img={advanced}
            name="Advanced"
            price="289"
            color="#f99d77"
            features={[
              "Access to 5 recorded lessons",
              "Access to all the quizzes",
              "Access to 5 live streaming lessons",
              "Additional reading materials and tests",
              "Weekly generated exams",
              "Private mentor to track improvement",
              "Monthly report of achievements",
            ]}
          />
        </div>
      </Container>
    </StylePlansContainer>
  );
};

export default PlansContainer;
