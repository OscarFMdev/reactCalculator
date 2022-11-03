import PropTypes from 'prop-types';

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

Buttons.propTypes = {
  myFunction: PropTypes.func.isRequired,
};

export default Buttons;
