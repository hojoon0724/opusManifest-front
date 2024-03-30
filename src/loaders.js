const URL = process.env.REACT_APP_URL;

async function compositionsLoader() {
  const response = await fetch(`${URL}compositions/`);
  const compositions = await response.json();
  console.log(compositions);
  return compositions;
}

export default compositionsLoader;
