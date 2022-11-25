import React from "react";
import StyleAllEvents from "./style";
import Container from "../../UI/Container";
import arrow from "../../../assets/images/arrow-down-yellow.svg";
import marketing from "../../../assets/images/event-marketing.jpeg";
import design from "../../../assets/images/event-design.jpeg";
import development from "../../../assets/images/event-development.jpeg";
import Events from "../Events";

const AllEvents = () => {
  return (
    <StyleAllEvents>
      <img src={arrow} alt="arrow" />
      <Container>
        <h1>All Events</h1>
        <div className="categories">
          <button className="active">All</button>
          <button>Development</button>
          <button>Design</button>
          <button>Marketing</button>
        </div>
        <div className="events">
          <Events
            img={marketing}
            month="July"
            date="20"
            title="Social Media Marketing Masterclass"
            category="Marketing"
          />
          <Events
            img={design}
            month="August"
            date="07"
            title="Brand & Identity Design QA with Sophie Moore"
            category="Design"
          />
          <Events
            img={development}
            month="March"
            date="17"
            title="Landing Page Optimization Masterclass"
            category="Development"
          />
        </div>
      </Container>
    </StyleAllEvents>
  );
};

export default AllEvents;
