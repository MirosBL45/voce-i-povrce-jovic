import Home from '../src/pages/home/Home';
import About from '../src/pages/about/About';
import Contact from '../src/pages/contact/Contact';
import Gallery from '../src/pages/gallery/Gallery';
import Plans from '../src/pages/plans/Plans';
import Trainers from '../src/pages/trainers/Trainers';
import NotFound from '../src/pages/notFound/NotFound';

function App() {
  return (
    <div>
      <Home />
      <About />
      <Contact />
      <Gallery />
      <Plans />
      <Trainers />
      <NotFound />
    </div>
  );
}

export default App;
