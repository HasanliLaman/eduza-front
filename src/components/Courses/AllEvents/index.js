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
        <h1>Bütün Dərslər</h1>
        <div className="categories">
          <button className="active">Hamısı</button>
          <button>Fizika</button>
          <button>Kimya</button>
          <button>Riyaziyyat</button>
        </div>
        <div className="events">
          <Events
            img={marketing}
            month="İyul"
            date="20"
            title="Single variable and multivariable calculus"
            category="Riyaziyyat"
          />
          <Events
            img={design}
            month="Avqust"
            date="07"
            title="Quantum mechanics and quantum computing"
            category="Fizika"
          />
          <Events
            img={development}
            month="Mart"
            date="17"
            title="Organic and inorganic chemistry"
            category="Kimya"
          />
        </div>
      </Container>
    </StyleAllEvents>
  );
};

export default AllEvents;
