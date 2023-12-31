// all stuff
import { Link } from 'react-router-dom';
import './mainHeader.css';

// images
import BigImage from '../../../../assets/images/main_header.png';

function MainHeader() {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join the Legends of the Fitness World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            modi, quasi deleniti dolorem praesentium nulla.
          </p>
          <Link className="btn lg" to={'/plans'}>
            Get Started
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={BigImage} alt="Main Header" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
