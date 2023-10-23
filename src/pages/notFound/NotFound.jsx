// react stuff
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// style
import './notFound.css';

function NotFound() {
  const timeout = 15; // Vreme u sekundama
  const navigate = useNavigate();
  const [counter, setCounter] = useState(timeout);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    setTimeout(() => {
      navigate('/');
    }, timeout * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [navigate]);

  return (
    <section>
      <div className="container notfound__container">
        <h1>Oooops..</h1>
        <h2>That page cannot be found</h2>
        <p>
          Go back to the <Link to={'/'}>Homepage</Link>, or you will be
          redirected in {counter} seconds.
        </p>
      </div>
    </section>
  );
}

export default NotFound;
