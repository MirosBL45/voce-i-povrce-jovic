// components
import Footer from '../../components/footer/Footer';
import FAQs from '../../components/pageComponents/home/faqs/FAQs';
import MainHeader from '../../components/pageComponents/home/mainHeader/MainHeader';
import Programs from '../../components/pageComponents/home/programs/Programs';
import Testimonials from '../../components/pageComponents/home/testimonials/Testimonials';
import Values from '../../components/pageComponents/home/values/Values';

// style
import './home.css';

function Home() {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
