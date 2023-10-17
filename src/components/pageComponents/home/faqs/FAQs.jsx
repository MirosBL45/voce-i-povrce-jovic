// components
import SectionHead from '../../../sectionHead/SectionHead';
import FAQ from './FAQ';

// icons
import { FaQuestion } from 'react-icons/fa';

// styles and data
import './faqs.css';
import { faqs } from '../../../../assets/data/data';

function FAQs() {
  return (
    <section className="faqs">
      <div className="container faqs__container">
        <SectionHead icon={<FaQuestion />} title="FAQs" />
        <div className="faqs__wrapper">
          {faqs.map(({ question, answer }, index) => (
            <FAQ key={index} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQs;
