// components
import Header from '../../components/header/Header';

// images
import HeaderImage from '../../assets/images/header_bg_3.jpg';

// style
import './gallery.css';

function Gallery() {
  return (
    <>
      <Header title={'Our Gallery'} image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        incidunt voluptatem ut, ipsa libero sunt!
      </Header>
    </>
  );
}

export default Gallery;
