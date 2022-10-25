import React from 'react';

const Buttons = () => (
  <>
    <li className="gray-button">AC</li>
    <li className="gray-button">+/-</li>
    <li className="gray-button">%</li>
    <li className="orange-button">÷</li>
    <li className="gray-button">7</li>
    <li className="gray-button">8</li>
    <li className="gray-button">9</li>
    <li className="orange-button">x</li>
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
  </>
);

export default class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  render() {
    const { value } = this.state;
    return (
      <section className="calculator-container">
        <div className="calculator">
          <div className="gray-box">
            <p>{value}</p>
          </div>
          <ul className="operation-grid">
            <Buttons />
          </ul>
        </div>
      </section>

    );
  }
}
