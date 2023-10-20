// react stuff
import { Routes, Route } from 'react-router-dom';

// pages
import Home from '../src/pages/home/Home';
import About from '../src/pages/about/About';
import Contact from '../src/pages/contact/Contact';
import Gallery from '../src/pages/gallery/Gallery';
import Plans from '../src/pages/plans/Plans';
import Trainers from '../src/pages/trainers/Trainers';
import NotFound from '../src/pages/notFound/NotFound';

// components
import Navbar from '../src/components/navbar/Navbar';
import Footer from './components/footer/Footer';
import OpenInTop from './components/openInTop/OpenInTop';

function App() {
  return (
    <>
      <Navbar />
      <OpenInTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="plans" element={<Plans />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
