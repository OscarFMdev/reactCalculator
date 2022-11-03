import { fireEvent, render } from '@testing-library/react';
import Calculator from '../../components/Calculator';

describe('Calculator', () => {
  /* RENDER */
  test('should render', () => {
    const calculator = render(<Calculator />);
    expect(calculator).toMatchSnapshot();
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
