// components
import Header from '../../components/header/Header';

// style
import './about.css';

// data
import { aboutData } from '../../assets/data/data';

// images
import HeaderImage from '../../assets/images/header_bg_1.jpg';

function About() {
  return (
    <>
      <Header title={'About Us'} image={HeaderImage}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
        eum perspiciatis sed quisquam, voluptatum animi similique consequuntur
        commodi eos saepe!
      </Header>
      {aboutData.map((item, index) => (
        <section key={index} className={`${item.sectionClass}`}>
          <div
            className={`container all-about ${item.containerClass} ${
              (index + 1) % 2 === 0 && 'row-reverse'
            }`}
          >
            <div className="about__section-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="about__section-content">
              <h1>{item.title}</h1>
              {item.text.map((paragraph, indexP) => (
                <p key={indexP}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default About;
