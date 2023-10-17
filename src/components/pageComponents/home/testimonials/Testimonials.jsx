import { useState } from 'react';

// components
import SectionHead from '../../../sectionHead/SectionHead';
import Card from '../../../../UI/Card';

// style
import './testimonials.css';

// icons
import { ImQuotesLeft } from 'react-icons/im';
import {
  IoIosArrowDropleftCircle as ArrowLeft,
  IoIosArrowDroprightCircle as ArrowRight,
} from 'react-icons/io';

// data
import { testimonials } from '../../../../assets/data/data';

function Testimonials() {
  const [index, setIndex] = useState(0);
  const { name, quote, job, avatar } = testimonials[index];

  return (
    <section className="testimonials">
      <div className="container testimonials__container">
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
          <button className="testimonials__btn">
            <ArrowLeft />
          </button>
          <button className="testimonials__btn">
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
