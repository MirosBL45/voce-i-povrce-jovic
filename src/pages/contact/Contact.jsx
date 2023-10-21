// components
import Header from '../../components/header/Header';

// images and icons
import HeaderImage from '../../assets/images/header_bg_2.jpg';
import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';

// style
import './contact.css';

function Contact() {
  return (
    <>
      <Header title={'Get in Touch'} image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto velit
        nobis adipisci laudantium nesciunt ex voluptatum necessitatibus ullam?
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mailto:jovicmiroslav88@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail />
            </a>
            <a href="http://facebook" target="_blank" rel="noopener noreferrer">
              <BsMessenger />
            </a>
            <a
              href="http://wa.me/+381649050301"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
