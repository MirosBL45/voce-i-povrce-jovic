// components
import SectionHead from '../../../sectionHead/SectionHead';
import Card from '../../../../UI/Card';

// images and icons
import ValuesImage from '../../../../assets/images/values.jpg';
import { GiCutDiamond } from 'react-icons/gi';

// styles and data
import './values.css';
import { values } from '../../../../assets/data/data';

function Values() {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={ValuesImage} alt="Values" />
          </div>
        </div>
        <div className="values__right">
          <SectionHead icon={<GiCutDiamond />} title={'Values'} />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
            dolorum ipsam tempora.
          </p>
          <div className="values__wrapper">
            {values.map(({ icon, title, desc }, index) => (
              <Card key={index} className="values__value">
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{desc}</small>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
