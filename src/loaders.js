const URL = process.env.REACT_APP_URL;

export async function compositionsLoader() {
  const response = await fetch(`${URL}compositions/`);
  const compositions = await response.json();
  console.log(compositions);
  return compositions;
}

export async function workDetailsLoader({ params }) {
  const response = await fetch(`${URL}compositions/${params.id}/`);
  const work = await response.json();
  console.log(work);
  return work;
}
