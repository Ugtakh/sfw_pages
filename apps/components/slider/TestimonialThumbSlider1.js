"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { datas } from "./testimonials";

const TestimonialThumbSlider1 = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider2, slider1]);

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // prevArrow: (".testimonial-prev-arrow"),
    // nextArrow: (".testimonial-next-arrow"),
    fade: true,
    loop: true,
  };

  const settingsThumbs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    loop: true,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
  };

  return (
    <>
      <div className="testimonial-sliders">
        <Slider
          {...settingsThumbs}
          asNavFor={nav1}
          ref={(slider) => setSlider2(slider)}
          className="testimonial-nav "
        >
          {datas.map((testimonial) => (
            <TestimonialImg testimonial={testimonial} />
          ))}
        </Slider>
        <Slider
          {...settingsMain}
          asNavFor={nav2}
          ref={(slider) => setSlider1(slider)}
          className="slider-testimonial"
        >
          {datas.map((testimonial) => (
            <TestimonialCard testimonial={testimonial} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default TestimonialThumbSlider1;

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="single-testimonial">
      <h5>{testimonial.message}</h5>
      <div className="author">
        <Link href="#">{testimonial.name}</Link>
        <p>{testimonial.company}</p>
      </div>
    </div>
  );
};

const TestimonialImg = ({ testimonial }) => {
  return (
    <div className="single-testimonial-nav">
      <img src={testimonial.imgUrl} alt={testimonial.name} />
    </div>
  );
};
