import { render } from '@testing-library/react';
import calculate from '../../logic/calculate';

describe('calculate', () => {
  /* CALCULATIONS TESTS */
  test('7 + 5 should be 12', () => {
    /* Arrange */
    const total = 7;
    const next = 5;
    const operation = '+';

    /* Act */
    const result = calculate({
      total,
      next,
      operation,
    }, operation);

    /* Assert */
    expect(result.total).toBe('12');
  });

  /* RENDERING TESTS */
  test('should create a div element containing the result', () => {
    /* Arrange */
    const obj = {
      total: 7,
      next: 5,
      operation: '+',
    };

    /* Act */
    const result = calculate(obj, obj.operation);
    const { container } = render(result.total);

    /* Assert */
    expect(container).toMatchSnapshot();
  });

  /* USER INTERACTION */
});