// react stuff
import { Link } from 'react-router-dom';

// components
import Header from '../../components/header/Header';
import Card from '../../UI/Card';

// data and image
import { plans } from '../../assets/data/data';
import HeaderImage from '../../assets/images/header_bg_4.jpg';

// style
import './plans.css';

function Plans() {
  return (
    <>
      <Header title={'Membership Plans'} image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, suscipit
        velit!
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ name, desc, price, features }, index) => (
            <Card className={'plan'} key={index}>
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{`$${price}`}</h1>
              <h2>/mo</h2>
              <h4>Features</h4>
              {features.map(({ feature, available }, featureIndex) => (
                <p className={!available ? 'disabled' : ''} key={featureIndex}>
                  {feature}
                </p>
              ))}
              <Link to={'/contact'} className="btn lg">
                Choose Plan
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

export default Plans;
