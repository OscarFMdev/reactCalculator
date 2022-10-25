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
            <li className="gray-button">1</li>
            <li className="gray-button">1</li>
            <li className="gray-button">1</li>
            <li className="orange-button">1</li>
            <li className="gray-button">1</li>
            <li className="gray-button">1</li>
            <li className="gray-button">1</li>
            <li className="orange-button">1</li>
            <li className="gray-button">1</li>
            <li className="gray-button">1</li>
            <li className="gray-button">1</li>
            <li className="orange-button">1</li>
            <li className="gray-button">1</li>
            <li className="gray-button">1</li>
            <li className="gray-button">1</li>
            <li className="orange-button">1</li>
            <li className="gray-button large">1</li>
            <li className="gray-button">1</li>
            <li className="orange-button">1</li>
          </ul>
        </div>
      </section>

    );
  }
}
