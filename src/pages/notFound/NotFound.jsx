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
        <h2>Page Not Found</h2>
        <Link to={'/'} className="btn">
          Go Back Home
        </Link>
        <div>
          <p>
            Automatsko preusmeravanje na početnu stranicu za {counter} sekundi.
          </p>
          {/* Dodajte ostatak sadržaja */}
        </div>
      </div>
    </section>
  );
}

export default NotFound;
