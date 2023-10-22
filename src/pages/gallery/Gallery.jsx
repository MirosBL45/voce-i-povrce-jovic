// components
import Header from '../../components/header/Header';

// images
import HeaderImage from '../../assets/images/header_bg_3.jpg';

// style
import './gallery.css';

function Gallery() {
  const galleryLength = 15;
  const images = [];
  const altText = [
    'kupine',
    'maline',
    'jabuke',
    'grasak',
    'kupine',
    'maline',
    'jabuke',
    'grasak',
    'kupine',
    'maline',
    'jabuke',
    'grasak',
    'kupine',
    'maline',
    'jabuke',
  ];

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../assets/images/gallery${i}.jpg`));
  }

  return (
    <>
      <Header title={'Our Gallery'} image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        incidunt voluptatem ut, ipsa libero sunt!
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, index) => (
            <article key={index}>
              <img src={image} alt={altText[index]} />
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Gallery;
