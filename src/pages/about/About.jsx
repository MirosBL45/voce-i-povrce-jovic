// components
import Header from '../../components/header/Header';

// style
import './about.css';

// images
import HeaderImage from '../../assets/images/header_bg_1.jpg';
import StoryImage from '../../assets/images/about1.jpg';
import VisionImage from '../../assets/images/about2.jpg';
import MissionImage from '../../assets/images/about3.jpg';

function About() {
  return (
    <>
      <Header title={'About Us'} image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
        eum perspiciatis sed quisquam, voluptatum animi similique consequuntur
        commodi eos saepe!
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story 1" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam in
              odio reprehenderit, praesentium, omnis rerum asperiores expedita
              hic quod eligendi ipsam dolore quidem? Odit, harum nemo in
              quibusdam a ratione.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
              maxime assumenda, amet eligendi quisquam ducimus rerum
              perspiciatis delectus. Culpa, cupiditate?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, blanditiis.
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam in
              odio reprehenderit, praesentium, omnis rerum asperiores expedita
              hic quod eligendi ipsam dolore quidem? Odit, harum nemo in
              quibusdam a ratione.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
              maxime assumenda, amet eligendi quisquam ducimus rerum
              perspiciatis delectus. Culpa, cupiditate?
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision 1" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission 1" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam in
              odio reprehenderit, praesentium, omnis rerum asperiores expedita
              hic quod eligendi ipsam dolore quidem? Odit, harum nemo in
              quibusdam a ratione.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
              maxime assumenda, amet eligendi quisquam ducimus rerum
              perspiciatis delectus. Culpa, cupiditate?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, blanditiis.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
