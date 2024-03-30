import { redirect } from 'react-router-dom';

const URL = process.env.REACT_APP_URL;

// Create
async function createAction({ request, params }) {
  const formData = await request.formData();
  const createdComposition = {
    title: formData.get('title'),
    subtitle: formData.get('subtitle'),
    year: formData.get('year'),
    instrumentation: formData.get('instrumentation'),
    publisher: formData.get('publisher'),
  };
  await fetch(`${URL}compositions/`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(createdComposition),
  });
  return redirect('/dashboard');
}
// Read

// Update

// Delete

export default createAction;
``;
