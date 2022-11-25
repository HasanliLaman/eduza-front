import React from "react";
import Banner from "../components/UI/Banner";
import AllEvents from "../components/Courses/AllEvents";

const Events = () => {
  return (
    <div>
      <Banner text={"Events"} primary={false} />
      <AllEvents />
    </div>
  );
};

export default Events;
