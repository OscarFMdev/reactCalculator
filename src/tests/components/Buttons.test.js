import { render } from '@testing-library/react';
import Buttons from '../../components/Buttons';

describe('Buttons', () => {
  const handleClick = jest.fn();
  test('should render', () => {
    const { container } = render(<Buttons handleClick={handleClick} />);
    expect(container).toMatchSnapshot();
  });
});
