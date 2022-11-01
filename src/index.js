import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { BrowserRouter } from 'react-router-dom';
import MathMagiciansApp from './MathMagiciansApp';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MathMagiciansApp />
    </BrowserRouter>
  </React.StrictMode>,
);
