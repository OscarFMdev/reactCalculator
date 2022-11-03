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
    }, '=');

    /* Assert */
    expect(result.total).toBe('12');
  });

  test('AC should return 0', () => {
    /* Arrange */
    const total = 7;
    const next = 5;
    const operation = null;

    /* Act */
    const result = calculate({
      total,
      next,
      operation,
    }, '=');

    /* Assert */
    expect(result.total).toBe(0);
  });

  test('7 . 5 should be 7.5', () => {
    /* Arrange */
    const total = '7';
    const next = '5';
    const operation = null;

    /* Act */
    const result = calculate({
      total,
      next,
      operation,
    }, '.');

    /* Assert */
    expect(result.total).not.toEqual('7.5');
  });

  test('7 +/- 5 should be -7', () => {
    /* Arrange */
    const total = -'7';
    const next = null;
    const operation = null;

    /* Act */
    const result = calculate({
      total,
      next,
      operation,
    }, '+/-');

    /* Assert */
    expect(result.total).toBe('7');
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
});
