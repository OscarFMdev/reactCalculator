const getQuoteObj = async () => {
  const url = ('https://random-math-quote-api.herokuapp.com/');
  const response = await fetch(url);
  const { author, mathQuote } = await response.json();

  return {
    author,
    mathQuote,
  };
};

export default getQuoteObj;
