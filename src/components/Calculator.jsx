import React from 'react';
// import calculate from '../logic/calculate';
// import operate from '../logic/operate';

const Buttons = () => (
  <>
    <button type="button" className="gray-button">AC</button>
    <button type="button" className="gray-button">+/-</button>
    <button type="button" className="gray-button">%</button>
    <button type="button" className="orange-button">÷</button>
    <button type="button" className="gray-button">7</button>
    <button type="button" className="gray-button">8</button>
    <button type="button" className="gray-button">9</button>
    <button type="button" className="orange-button">x</button>
    <button type="button" className="gray-button">4</button>
    <button type="button" className="gray-button">5</button>
    <button type="button" className="gray-button">6</button>
    <button type="button" className="orange-button">-</button>
    <button type="button" className="gray-button">1</button>
    <button type="button" className="gray-button">2</button>
    <button type="button" className="gray-button">3</button>
    <button type="button" className="orange-button">+</button>
    <button type="button" className="gray-button large">0</button>
    <button type="button" className="gray-button">.</button>
    <button type="button" className="orange-button">=</button>
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
