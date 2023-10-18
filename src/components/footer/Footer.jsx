import { Link } from 'react-router-dom';

// style
import './footer.css';

// images and icons
import Logo from '../../assets/images/logo.png';
import { FaLinkedin, FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to={'/'} className="logo">
            <img src={Logo} alt="Footer Logo" />
          </Link>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A nisi
            tempora odit doloribus est reprehenderit beatae repudiandae
            accusamus voluptas eveniet.
          </p>
          <div className="footer__socials">
            <a
              href="http://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="http://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="http://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineInstagram />
            </a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to={'/about'}>About</Link>
          <Link to={'/plans'}>Plans</Link>
          <Link to={'/trainers'}>Trainers</Link>
          <Link to={'/gallery'}>Gallery</Link>
          <Link to={'/contact'}>Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to={'/s'}>Blog</Link>
          <Link to={'/s'}>Case Studies</Link>
          <Link to={'/s'}>Events</Link>
          <Link to={'/s'}>Communities</Link>
          <Link to={'/s'}>FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to={'/contact'}>Contact Us</Link>
          <Link to={'/s'}>Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>
          {currentYear}{' '}
          <a
            href="https://www.linkedin.com/in/mj888/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Miroslav Jovic
          </a>{' '}
          &copy; All Right Reserved
        </small>
      </div>
    </footer>
  );
}

export default Footer;
