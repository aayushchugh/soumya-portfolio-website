"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import config from "../lib/config";

const AchievementsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div className="mt-8">
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
  };

  return (
    <section
      className="py-16 pb-32 dark:bg-[#2C2D33] bg-slate-50 md:px-10"
      id="achievements"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-orange-500">
          {config.achievementsHeading.title}
        </h2>
        <p className="text-xl text-gray-400 font-bold mt-2">
          {config.achievementsHeading.description}
        </p>
      </div>

      <div className="mt-12 px-6 max-w-7xl mx-auto">
        <Slider {...settings}>
          {config.achievements.map((achievement, index) => (
            <div key={index} className="px-2 h-full mb-2">
              <div className="h-full dark:bg-[#4B4F5C] hover:scale-105 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 p-4">
                <div className="flex flex-col items-center justify-center h-full flex flex-col">
                  <div className="h-56 w-full">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold dark:text-slate-50 text-slate-800 text-center mb-4 mt-6">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 text-base text-center">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default AchievementsSection;
