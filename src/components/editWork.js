import { useState } from 'react';
import { deleteAction } from '../actions';
import { useNavigate } from 'react-router-dom';

function EditWork({ work, handleUpdate }) {
  console.log(`editWork`);
  const navigate = useNavigate();
  const [accordionClass, setAccordionClass] = useState('closed');
  const id = work.url.split('/')[4];

  const [formData, setFormData] = useState({
    title: work.title,
    subtitle: work.subtitle,
    year: work.year,
    instrumentation: work.instrumentation,
    category: work.category,
    notes: work.notes,
  });

  // sends the formData to the parent comp
  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedComposition = {
      title: formData.title,
      subtitle: formData.subtitle,
      year: formData.year,
      instrumentation: formData.instrumentation,
      category: formData.category,
      notes: formData.notes,
    };
    handleUpdate(updatedComposition, id);
    handleAccordion();
  };

  const handleDelete = async (event) => {
    handleAccordion();
    await deleteAction({ id });
    return navigate('/dashboard');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAccordion = (event) => {
    if (accordionClass === 'closed') {
      setAccordionClass('open');
    } else if (accordionClass === 'open') {
      setAccordionClass('closed');
    }
  };

  return (
    <div className="composition-data-wrapper flex column">
      <div id={id} className="composition-accordion-wrapper" onClick={handleAccordion}>
        <div className="composition-data" key={id}>
          <div className="year">{work.year}</div>
          <div className="work-title-wrapper">
            <div className="title">{work.title}</div>
            <div className="subtitle">{work.subtitle}</div>
          </div>
          <div className="instrumentation">{work.instrumentation}</div>
          <div className="category">{work.category}</div>
        </div>
      </div>

      <div id={id} className={`edit-form-wrapper flex column ${accordionClass}`}>
        <form id={id} className="edit-form flex row">
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
            instrumentation
            <textarea
              type="text"
              name="instrumentation"
              className="instrumentation form-input"
              value={formData.instrumentation}
              onChange={handleInputChange}
            />
          </label>
          <label>
            category
            <textarea
              type="text"
              name="category"
              className="category form-input"
              value={formData.category}
              onChange={handleInputChange}
            />
          </label>
          <label className="notes">
            notes
            <textarea
              type="text"
              name="notes"
              className="notes form-input"
              value={formData.notes}
              onChange={handleInputChange}
            />
          </label>
        </form>
        <div className="edit-buttons-wrapper flex row">
          <button className="edit-button-delete" type="submit" onClick={handleDelete}>
            Delete
          </button>
          <button className="edit-button-update" type="submit" onClick={handleSubmit}>
            Update
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default EditWork;
