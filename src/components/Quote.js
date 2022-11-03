import { useCallback, useState, useEffect } from 'react';
import quoteAPI from '../helpers/quoteAPI';

const Quote = () => {
  const [quote, setQuote] = useState({
    author: '',
    content: '',
  });

  const fetchData = useCallback(async () => {
    const { author, content } = await quoteAPI();
    setQuote({ author, content });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <section className="quote-section">
        <p className="quote">
          {' '}
          {quote.content}
        </p>
        <p className="author">
          {quote.author}
          {' '}
        </p>
        <button type="button" onClick={fetchData}>New quote</button>
      </section>
    </>
  );
};

export default Quote;
