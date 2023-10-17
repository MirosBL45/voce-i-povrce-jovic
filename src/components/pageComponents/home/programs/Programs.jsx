// components
import SectionHead from '../../../sectionHead/SectionHead';
import Card from '../../../../UI/Card';

// style
import './programs.css';

// icons
import { FaCrown } from 'react-icons/fa';
import { AiFillCaretRight } from 'react-icons/ai';

// data and stuff
import { programs } from '../../../../assets/data/data';
import { Link } from 'react-router-dom';

function Programs() {
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHead icon={<FaCrown />} title={'Programs'} />
        <div className="programs_wrapper">
          {programs.map((program, index) => (
            <Card className="programs__program" key={index}>
              <span>{program.icon}</span>
              <h4>{program.title}</h4>
              <small>{program.info}</small>
              <Link to={program.path} className="btn sm">
                Learn More <AiFillCaretRight />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;
