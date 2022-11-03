const quoteAPI = async () => {
  const response = await fetch('https://random-math-quote-api.herokuapp.com/');
  const json = await response.json();
  return {
    author: json.author,
    content: json.quote,
  };
};

export default quoteAPI;
