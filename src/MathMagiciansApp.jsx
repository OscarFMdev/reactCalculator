import { Link, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';

const MathMagiciansApp = () => (
  <>
    <header className="top-section">
      <h1>Math Magicians</h1>
      <nav>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/calculator">Calculator</Link>
        <Link className="link" to="/Quote">Quote</Link>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<Calculator />} />
    </Routes>
  </>
);

export default MathMagiciansApp;
