import quoteAPI from '../../helpers/quoteAPI';

describe('quoteAPI', () => {
  test('should return an author', async () => {
    const { author } = await quoteAPI();
    expect(author).toBeDefined();
  });
  test('should return an content', async () => {
    const { content } = await quoteAPI();
    expect(content).toBeDefined();
  });
});
