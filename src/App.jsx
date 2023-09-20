// routers react
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "../src/pages/home/Home";
import About from "../src/pages/about/About";
import Contact from "../src/pages/contact/Contact";
import Gallery from "../src/pages/gallery/Gallery";
import Plans from "../src/pages/plans/Plans";
import Trainers from "../src/pages/trainers/Trainers";
import NotFound from "../src/pages/notFound/NotFound";

// components
import Navbar from "../src/components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Gallery />
      <Plans />
      <Trainers />
      <NotFound />
    </BrowserRouter>
  );
}

export default App;
