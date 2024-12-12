"use client";
import React from "react";
import Slider from "react-slick";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "I rarely like to write reviews, but the Marketify team truly deserve a standing ovation for their customer support, customization, and most importantly, friendliness and professionalism. Many thanks once again for everything and hope that I get to deal with you again in the near future.",
      author: "Mike Anderson",
      position: "Vivaco Studio",
      avatar: "/assets/avatar.png",
    },
    {
      id: 2,
      text: "Excellent service and amazing designs! They went above and beyond to ensure everything was perfect. I am truly impressed with the quality and dedication.",
      author: "Sarah Johnson",
      position: "Creative Minds",
      avatar: "/assets/avatar.png",
    },
    {
      id: 3,
      text: "Their attention to detail and commitment to delivering top-notch results make them stand out from the rest. Highly recommended!",
      author: "Alex Brown",
      position: "DesignHub",
      avatar: "/assets/avatar.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center mt-6 space-x-2">{dots}</ul>
      </div>
    ),
  };

  return (
    <section
      className="relative py-16 bg-white text-center dark:bg-[#2C2D33] md:px-10"
      id="testimonial"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-orange-500 text-lg font-semibold">Testimonials</h2>
        <h3 className="text-4xl font-bold mt-2 dark:text-slate-50">
          What My Clients Say
        </h3>
        <p className="text-gray-500 text-lg mt-4 dark:text-slate-50">
          Most common methods for designing websites that work well on desktop
          is responsive and adaptive design.
        </p>

        {/* Testimonial Slider */}
        <div className="mt-12">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="mx-auto max-w-3xl px-4">
                <div className="text-5xl text-orange-500">
                  <span>&ldquo;</span>
                </div>
                <p className="text-gray-700 dark:text-slate-50 text-xl mt-4 leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="flex items-center justify-center mt-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-slate-50">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-500 text-sm dark:text-slate-50">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
