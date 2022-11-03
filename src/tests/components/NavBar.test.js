import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../../components/NavBar';

describe('NavBar', () => {
  test('should render', () => {
    const { container } = render(<Router><NavBar /></Router>);
    expect(container).toMatchSnapshot();
  });
});
