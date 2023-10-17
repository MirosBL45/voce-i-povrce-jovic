// components
import FAQs from '../../components/pageComponents/home/faqs/FAQs';
import MainHeader from '../../components/pageComponents/home/mainHeader/MainHeader';
import Programs from '../../components/pageComponents/home/programs/Programs';
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
    </>
  );
}

export default Home;
