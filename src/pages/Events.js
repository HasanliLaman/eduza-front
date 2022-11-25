import React, { useEffect } from "react";
import Banner from "../components/UI/Banner";
import AllEvents from "../components/Courses/AllEvents";

const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Banner text={"Canlı Dərslər"} primary={false} />
      <AllEvents />
    </div>
  );
};

export default Events;
