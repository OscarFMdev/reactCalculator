import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from '../../components/Calculator';
import operate from '../../logic/operate';

describe('Operate tests', () => {
  /* OPERATION TESTS */
  test('2 x 5 should return \'10\'', () => {
    /* Arrange */
    const numberOne = 2;
    const numberTwo = 5;
    const operation = 'x';

    /* Act */
    const result = operate(numberOne, numberTwo, operation);

    /* Assert */
    expect(result).toBe('10');
  });

  /* RENDERING TESTS */
  test('0 + 0 should render 0', () => {
    /* Arrange */
    const numberOne = 0;
    const numberTwo = 0;
    const operation = '+';

    /* Act */
    const { container } = render(operate(numberOne, numberTwo, operation));

    /* Assert */
    expect(container).toMatchSnapshot();
  });

  test('5 x 7 should render a div containing 35', () => {
    const numberOne = 5;
    const operation = 'x';
    const numberTwo = 7;

    const result = '35';
    render(operate(numberOne, numberTwo, operation));

    /* Assert */
    expect(screen.getByText(result)).toBeDefined();
  });

  /* USER INTERACTION */
  test('should modify the result-box content after user pressing the buttons "7"', () => {
    /* Arrange */
    const { container } = render(<Calculator />);
    const buttons = container.querySelectorAll('button');
    const buttonSeven = buttons[4];

    /* Act */
    fireEvent.click(buttonSeven);
    const resultBox = container.querySelector('.result-box > p').innerHTML;

    /* Assert */
    expect(resultBox).toBe('7');
  });
});
