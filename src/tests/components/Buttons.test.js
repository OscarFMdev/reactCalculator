import { fireEvent, render, screen } from '@testing-library/react';
import Buttons from '../../components/Buttons';

describe('Buttons', () => {
  const handleClick = jest.fn();
  test('should render', () => {
    const { container } = render(<Buttons handleClick={handleClick} />);
    expect(container).toMatchSnapshot();
  });
  test('should contain "=" sign', () => {
    render(<Buttons handleClick={handleClick} />);
    const result = screen.getByText('=');
    expect(result).toBeDefined();
  });
  test('should call the handleClick function when clicked', () => {
    const { container } = render(<Buttons handleClick={handleClick} />);
    const buttons = container.querySelectorAll('button');
    const button = buttons[9];

    fireEvent.click(button);

    expect(handleClick).toBeCalledTimes(1);
  });
});
