import React from 'react';

export default class Calculator extends React.PureComponent {
  render() {
    return (

      <section className="calculator-container">
        <div className="calculator">
          <div className="gray-box">
            <p>12345670</p>
          </div>
          <div className="operation-grid" />
        </div>
      </section>

    );
  }
}
