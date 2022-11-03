import {
  Route, Routes,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Quote from './components/Quote';

const MathMagiciansApp = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="quote" element={<Quote />} />
    </Routes>
  </>
);

export default MathMagiciansApp;
