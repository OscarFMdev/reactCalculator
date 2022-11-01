import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';

const MathMagiciansApp = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="calculator" element={<Calculator />} />
  </Routes>
);

export default MathMagiciansApp;
