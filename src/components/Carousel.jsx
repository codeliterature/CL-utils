import React, { useState } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import data from '../data';

const Carousel = () => {
  // Slick settings
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
  };


  
  return (
    <div className="py-8">
      <Slider {...settings}>
        {
          data.map((item, index) => {
            return <Card key={index} title={item.title} description={item.description} link={item.link}/>
          })
        }
      </Slider>
      </div>
  );
};

export default Carousel;
