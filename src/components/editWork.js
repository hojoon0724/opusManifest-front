// import { Form } from 'react-router-dom';

// function EditWork({ work }) {
//   const id = work.url.split('/')[4];

//   return (
//     <div className="composition-data-wrapper">
//       {/* <div className="composition-data" key={id}>
//         <div className="title">{work.title}</div>
//         <div className="subtitle">{work.subtitle}</div>
//         <div className="year">{work.year}</div>
//         <div className="instrumentation">{work.instrumentation}</div>
//         <div className="publisher">{work.publisher}</div>
//       </div> */}
//       <div className="edit-form-wrapper">
//         <Form className="editing-block" action={`/compositions/${id}/`} method="post">
//           <div className="work-title-wrapper">
//             <label>
//               title
//               <input type="text" name="title" className="title form-input" defaultValue={work.title} />
//             </label>
//             <label>
//               subtitle
//               <input type="text" name="subtitle" className="subtitle form-input" defaultValue={work.subtitle} />
//             </label>
//           </div>
//           <label>
//             year
//             <input type="text" name="year" className="year form-input" defaultValue={work.year} />
//           </label>
//           <label>
//             instrumentation
//             <input
//               type="text"
//               name="instrumentation"
//               className="instrumentation form-input"
//               defaultValue={work.instrumentation}
//             />
//           </label>
//           <label>
//             publisher
//             <input type="text" name="publisher" className="publisher form-input" defaultValue={work.publisher} />
//           </label>
//           <input type="submit" value="Update" />
//         </Form>
//         <Form action={`/compositions/${id}/`} method="post">
//           <input type="submit" value="Delete" />
//         </Form>
//       </div>
//     </div>
//   );
// }

// export default EditWork;

import { Form } from 'react-router-dom';
import { useState } from 'react';
import { updateAction } from '../actions';

function EditWork({ work }) {
  const id = work.url.split('/')[4];

  const [formData, setFormData] = useState({
    title: work.title,
    subtitle: work.subtitle,
    year: work.year,
    instrumentation: work.instrumentation,
    publisher: work.publisher,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      console.log(formData);
      const updatedComposition = {
        title: formData.get('title'),
        subtitle: formData.get('subtitle'),
        year: formData.get('year'),
        instrumentation: formData.get('instrumentation'),
        publisher: formData.get('publisher'),
      };
      console.log(updatedComposition);
      await updateAction({ updatedComposition, id });
    } catch (error) {
      console.error('Error updating work:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="composition-data-wrapper">
      {/* <div className="composition-data" key={id}>
        <div className="title">{work.title}</div>
        <div className="subtitle">{work.subtitle}</div>
        <div className="year">{work.year}</div>
        <div className="instrumentation">{work.instrumentation}</div>
        <div className="publisher">{work.publisher}</div>
      </div> */}

      <div className="edit-form-wrapper">
        <Form className="editing-block" onSubmit={handleSubmit}>
          <div className="work-title-wrapper">
            <label>
              title
              <input
                type="text"
                name="title"
                className="title form-input"
                value={formData.title}
                onChange={handleInputChange}
              />
            </label>
            <label>
              subtitle
              <input
                type="text"
                name="subtitle"
                className="subtitle form-input"
                value={formData.subtitle}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <label>
            year
            <input
              type="text"
              name="year"
              className="year form-input"
              value={formData.year}
              onChange={handleInputChange}
            />
          </label>
          <label>
            instrumentation
            <input
              type="text"
              name="instrumentation"
              className="instrumentation form-input"
              value={formData.instrumentation}
              onChange={handleInputChange}
            />
          </label>
          <label>
            publisher
            <input
              type="text"
              name="publisher"
              className="publisher form-input"
              value={formData.publisher}
              onChange={handleInputChange}
            />
          </label>
          <input type="submit" value="Update" />
        </Form>
        <Form action={`/compositions/${id}/`} method="post">
          <input type="submit" value="Delete" />
        </Form>
      </div>
      <hr />
    </div>
  );
}

export default EditWork;
