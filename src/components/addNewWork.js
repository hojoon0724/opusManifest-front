import { Form } from 'react-router-dom';

export function AddNewWork() {
  return (
    <Form action="/compositions" method="post">
      <label className="title-label">
        title
        <input type="text" name="title" className="title" />
      </label>

      <label className="subtitle-label">
        subtitle
        <input type="text" name="subtitle" className="subtitle" />
      </label>

      <label className="year-label">
        year
        <input type="text" name="year" className="year" />
      </label>

      <label className="instrumentation-label">
        instrumentation
        <input type="text" name="instrumentation" className="instrumentation" />
      </label>

      <label className="publisher-label">
        publisher
        <input type="text" name="publisher" className="publisher" />
      </label>

      <input type="submit" value="Add" />
    </Form>
  );
}
