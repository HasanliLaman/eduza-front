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
        <h2>Our prices</h2>
        <div className="plans">
          <Plan
            img={basic}
            name="Basic"
            price="20"
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
            price="90"
            color="#fcdf69"
            features={[
              "Access to 6 recorded lessons",
              "Access to all the quizzes",
              "Access to 2 live streaming lessons",
              "Additional reading materials and tests",
              "Weekly generated exams",
            ]}
          />
          <Plan
            img={advanced}
            name="Advanced"
            price="120"
            color="#f99d77"
            features={[
              " Access to all recorded lessons",
              "Access to all the quizzes",
              "Access to 6 live streaming lessons",
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
