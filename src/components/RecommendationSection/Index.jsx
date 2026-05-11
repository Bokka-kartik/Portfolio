import React, { useState } from "react";
import testimonials from "../../data/testimonials";
import TestimonialCard from "./TestimonialCard";
import ArrowNavigation from "./ArrowNavigation";
import companyLogos from "../../data/companyLogos";
import CompanyLogo from "./CompanyLogo";

const RecommendationSection = () => {
  const [current, setCurrent] = useState(0);

  const testimonial = testimonials[current];

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((next) => (next === testimonials.length01 ? 0 : next + 1));
  };
  return (
    <section className="min-h-screen py-20 text-center  bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
        Testimonials
      </h2>
      <h3 className="text-4xl font-bold text-bold-600 darK:text-blue-400 mb-16">
        What People Say
      </h3>
      <TestimonialCard testimonial={testimonial} />

      <ArrowNavigation prev={prev} next={next} />

      <div className="flex flex-wrap justify-center gap-10 mt-16">
        {companyLogos.map((logo, idx) => (
          <CompanyLogo key={idx} logo={logo} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default RecommendationSection;
