import React from "react";
import StyleCourseContainer from "./style";
import Button from "../../UI/Button";
import Container from "../../UI/Container";
import Course from "../Course";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useSelector } from "react-redux";

import "swiper/css";
import "swiper/css/navigation";

const CourseContainer = () => {
  const { courses } = useSelector((state) => state.course);

  return (
    <StyleCourseContainer>
      <Container>
        <h2>Browse our popular courses</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation]}
          className="courses"
        >
          {courses.allCourses &&
            courses.allCourses.map((el) => (
              <SwiperSlide key={el._id}>
                <Course
                  name={el.title}
                  img={el.courseThumbnail}
                  tutor={el.tutor}
                />
              </SwiperSlide>
            ))}
        </Swiper>
        <Button isPrimary={true} text="Explore all courses" />
      </Container>
    </StyleCourseContainer>
  );
};

export default CourseContainer;
