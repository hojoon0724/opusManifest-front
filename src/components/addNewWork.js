import { Form } from 'react-router-dom';

export function AddNewWork() {
  return (
    <>
      <hr />
      <div className="add-new-work-title">Add new work</div>

      <Form action="/compositions" method="post" className="add-new-work-form edit-form flex row">
        <label>
          year
          <input type="text" name="year" className="year form-input" />
        </label>
        <div className="work-title-wrapper">
          <label>
            title
            <input type="text" name="title" className="title form-input" />
          </label>
          <label>
            subtitle
            <input type="text" name="subtitle" className="subtitle form-input" />
          </label>
        </div>
        <label>
          instrumentation
          <textarea type="text" name="instrumentation" className="instrumentation form-input" />
        </label>
        <label>
          category
          <input type="text" name="category" className="category form-input" />
        </label>

        <label className="notes">
          notes
          <textarea type="text" name="notes" className="notes form-input" />
        </label>

        <div className="edit-buttons-wrapper" style={{ justifyContent: 'center', gridColumn: '1/-1' }}>
          <div className="button-wrapper" style={{ margin: 'auto' }}>
            <input type="submit" value="Add" className="edit-button-add" />
          </div>
        </div>
      </Form>
    </>
  );
}
