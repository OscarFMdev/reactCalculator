import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const Buttons = ({ myFunction }) => (
  <>
    <button onClick={myFunction} type="button" className="blue-button">AC</button>
    <button onClick={myFunction} type="button" className="blue-button">+/-</button>
    <button onClick={myFunction} type="button" className="blue-button">%</button>
    <button onClick={myFunction} type="button" className="orange-button">÷</button>
    <button onClick={myFunction} type="button" className="blue-button">7</button>
    <button onClick={myFunction} type="button" className="blue-button">8</button>
    <button onClick={myFunction} type="button" className="blue-button">9</button>
    <button onClick={myFunction} type="button" className="orange-button">x</button>
    <button onClick={myFunction} type="button" className="blue-button">4</button>
    <button onClick={myFunction} type="button" className="blue-button">5</button>
    <button onClick={myFunction} type="button" className="blue-button">6</button>
    <button onClick={myFunction} type="button" className="orange-button">-</button>
    <button onClick={myFunction} type="button" className="blue-button">1</button>
    <button onClick={myFunction} type="button" className="blue-button">2</button>
    <button onClick={myFunction} type="button" className="blue-button">3</button>
    <button onClick={myFunction} type="button" className="orange-button">+</button>
    <button onClick={myFunction} type="button" className="blue-button large">0</button>
    <button onClick={myFunction} type="button" className="blue-button">.</button>
    <button onClick={myFunction} type="button" className="orange-button">=</button>
  </>
);

const Calculator = () => {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    setDisplay({
      total: 0,
      next: null,
      operation: null,
    });
  }, []);

  const handleClick = ({ target }) => {
    setDisplay(calculate(display, target.textContent));
  };

  const { total, next, operation } = display;
  return (
    <>
      <section className="calculator-container">
        <div className="calc-quote">Let&apos;s do dome Math!</div>
        <div className="calculator">
          <div className="result-box">
            <p>
              {total}
              {operation}
              {next}
            </p>
          </div>
          <ul className="operation-grid">
            <Buttons myFunction={handleClick} />
          </ul>
        </div>
      </section>
    </>
  );
};

Buttons.propTypes = {
  myFunction: PropTypes.func.isRequired,
};

export default Calculator;
