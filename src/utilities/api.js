const fetchCountry = async (name) => {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`
  );
  const data = await response.json();
  return data;
};

export default fetchCountry;
