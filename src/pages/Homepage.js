import React, { useEffect } from "react";
import AboutContainer from "../components/About/AboutContainer";
import CourseContainer from "../components/Courses/CourseContainer";
import PlansContainer from "../components/Courses/CoursePlans/PlansContainer";
import AllCategories from "../components/Courses/SearchByCategory/AllCategories";
import FeatureContainer from "../components/Features/FeatureContainer";
import HeroContainer from "../components/Hero/HeroContainer";
import StatsContainer from "../components/Statistics/StatsContainer";
import TeacherContainer from "../components/Teachers/TeacherContainer";
import { useDispatch } from "react-redux";
import { fetchCourses } from "../asyncThunk";

const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
    window.scrollTo(0, 0);
  }, [dispatch]);

  return (
    <div>
      <HeroContainer />
      <CourseContainer />
      <FeatureContainer />
      <TeacherContainer />
      <StatsContainer />
      <PlansContainer />
      <AboutContainer />
      <AllCategories />
    </div>
  );
};

export default Homepage;
