import SectionHead from "./SectionHead";
import { ImQuotesLeft } from "react-icons/im";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import Card from "../UI/Card";
import { useState } from "react";
import { testimonials } from "../data";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { name, quote, job, avatar } = testimonials[index];
  const prevTestimonialHandeler = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };
  const nextTestimonialHandeler = () => {
    if (index < testimonials.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };
  return (
    <div className="container">
      <section className="testimonials">
        <SectionHead
          icon={<ImQuotesLeft />}
          title="Testimonials"
          className="testimonials__head"
        />
        <Card className="testimonial">
          <div className="testimonial__avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testimonial__quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonial__title">{job}</small>
        </Card>
        <div className="testimonials__btn-container">
          <button
            className="testimonials__btn"
            onClick={prevTestimonialHandeler}
          >
            <IoIosArrowDropleftCircle />
          </button>
          <button
            className="testimonials__btn"
            onClick={nextTestimonialHandeler}
          >
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
