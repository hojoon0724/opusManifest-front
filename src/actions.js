import { redirect } from 'react-router-dom';

const URL = process.env.REACT_APP_URL;

// Create
export async function createAction({ request, params }) {
  const formData = await request.formData();

  const createdComposition = {
    title: formData.get('title'),
    subtitle: formData.get('subtitle'),
    year: formData.get('year'),
    instrumentation: formData.get('instrumentation'),
    category: formData.get('category'),
    notes: formData.get('notes'),
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

// Update
// export const updateAction = async ({ request, params }) => {
//   const formData = await request.formData();
//   console.dir(formData);
//   const updatedComposition = {
//     title: formData.get('title'),
//     subtitle: formData.get('subtitle'),
//     year: formData.get('year'),
//     instrumentation: formData.get('instrumentation'),
//     publisher: formData.get('publisher'),
//   };
//   console.dir(updatedComposition);

//   await fetch(`${URL}compositions/${params.id}/`, {
//     method: 'put',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(updatedComposition),
//   });

//   return redirect(`/dashboard`);
// };

export const updateAction = async ({ updatedComposition, id }) => {
  console.log(updatedComposition);
  console.log(id);
  await fetch(`${URL}compositions/${id}/`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedComposition),
  });
  console.log(`i made it here`);
};

// Delete
export const deleteAction = async ({ id }) => {
  console.log(id);
  console.log(`${URL}compositions/${id}/`);
  await fetch(`${URL}compositions/${id}/`, {
    method: 'delete',
  });

  return redirect('/dashboard');
};
