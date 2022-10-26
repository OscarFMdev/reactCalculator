import React from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const Buttons = ({ myFunction }) => (
  <>
    <button onClick={myFunction} type="button" className="gray-button">AC</button>
    <button onClick={myFunction} type="button" className="gray-button">+/-</button>
    <button onClick={myFunction} type="button" className="gray-button">%</button>
    <button onClick={myFunction} type="button" className="orange-button">÷</button>
    <button onClick={myFunction} type="button" className="gray-button">7</button>
    <button onClick={myFunction} type="button" className="gray-button">8</button>
    <button onClick={myFunction} type="button" className="gray-button">9</button>
    <button onClick={myFunction} type="button" className="orange-button">x</button>
    <button onClick={myFunction} type="button" className="gray-button">4</button>
    <button onClick={myFunction} type="button" className="gray-button">5</button>
    <button onClick={myFunction} type="button" className="gray-button">6</button>
    <button onClick={myFunction} type="button" className="orange-button">-</button>
    <button onClick={myFunction} type="button" className="gray-button">1</button>
    <button onClick={myFunction} type="button" className="gray-button">2</button>
    <button onClick={myFunction} type="button" className="gray-button">3</button>
    <button onClick={myFunction} type="button" className="orange-button">+</button>
    <button onClick={myFunction} type="button" className="gray-button large">0</button>
    <button onClick={myFunction} type="button" className="gray-button">.</button>
    <button onClick={myFunction} type="button" className="orange-button">=</button>
  </>
);

export default class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <section className="calculator-container">
        <div className="calculator">
          <div className="gray-box">
            <p>
              {total}
              {operation}
              {next}
            </p>
          </div>
          <ul className="operation-grid">
            <Buttons myFunction={this.handleClick} greet="Hello" />
          </ul>
        </div>
      </section>

    );
  }
}

Buttons.propTypes = {
  myFunction: PropTypes.func.isRequired,
};
