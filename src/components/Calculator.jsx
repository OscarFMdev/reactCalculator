import React from 'react';

export default class Calculator extends React.PureComponent {
  render() {
    return (
      <section className="calculator-container">
        <div className="calculator">
          <div className="gray-box">
            <p>12345670</p>
          </div>
          <ul className="operation-grid">
            <li className="gray-button">AC</li>
            <li className="gray-button">+/-</li>
            <li className="gray-button">%</li>
            <li className="orange-button">÷</li>
            <li className="gray-button">7</li>
            <li className="gray-button">8</li>
            <li className="gray-button">9</li>
            <li className="orange-button">X</li>
            <li className="gray-button">4</li>
            <li className="gray-button">5</li>
            <li className="gray-button">6</li>
            <li className="orange-button">-</li>
            <li className="gray-button">1</li>
            <li className="gray-button">2</li>
            <li className="gray-button">3</li>
            <li className="orange-button">+</li>
            <li className="gray-button large">0</li>
            <li className="gray-button">.</li>
            <li className="orange-button">=</li>
          </ul>
        </div>
      </section>

    );
  }
}
