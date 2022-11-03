import { render } from '@testing-library/react';
import Home from '../../components/Home';

describe('Home', () => {
  test('should render', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
