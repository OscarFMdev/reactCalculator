import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <header className="top-section">
      <h1>Math Magicians</h1>
      <nav>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/calculator">Calculator</Link>
        <Link className="link" to="/Quote">Quote</Link>
      </nav>
    </header>

  </>
);

export default Home;
