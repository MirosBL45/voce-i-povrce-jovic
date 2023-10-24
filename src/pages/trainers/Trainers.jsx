// components
import Header from '../../components/header/Header';
import Trainer from '../../components/pageComponents/trainers/trainer/Trainer';

// images and icons
import HeaderImage from '../../assets/images/header_bg_5.jpg';
import { BiLogoInstagram } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

// style and data
import './trainers.css';
import { trainers } from '../../assets/data/data';

function Trainers() {
  return (
    <>
      <Header title={'Our People'} image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
        obcaecati, fuga atque ex temporibus esse aliquid qui!
      </Header>
      <section className="trainers">
        <div className="container trainers__container">
          {trainers.map(({ image, name, job, socials }, index) => (
            <Trainer
              key={index}
              image={image}
              name={name}
              job={job}
              socials={[
                { icon: <BiLogoInstagram />, link: socials[0] },
                { icon: <AiOutlineTwitter />, link: socials[1] },
                { icon: <FaFacebookF />, link: socials[2] },
                { icon: <FaLinkedinIn />, link: socials[3] },
              ]}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Trainers;
