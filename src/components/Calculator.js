import React, { useEffect, useState } from 'react';
import calculate from '../logic/calculate';
import Buttons from './Buttons';

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

export default Calculator;
