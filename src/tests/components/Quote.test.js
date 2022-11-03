import { render } from '@testing-library/react';
import Quote from '../../components/Quote';

describe('Quote', () => {
  test('should render', () => {
    const { container } = render(<Quote />);
    expect(container).toMatchSnapshot();
  });
});
