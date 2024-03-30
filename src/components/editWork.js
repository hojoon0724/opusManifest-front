import { Form } from 'react-router-dom';

function EditWork({ work }) {
  console.log(work);
  const id = work.url.split('/')[4];
  return (
    <div className="composition-data" key={id}>
      <div className="title">{work.title}</div>
      <div className="subtitle">{work.subtitle}</div>
      <div className="year">{work.year}</div>
      <div className="instrumentation">{work.instrumentation}</div>
      <div className="publisher">{work.publisher}</div>
      <form>
        <label>
          title
          <input type="text" name="title" className="title" defaultValue={work.title} />
        </label>

        <label>
          subtitle
          <input type="text" name="subtitle" className="subtitle" defaultValue={work.subtitle} />
        </label>

        <label>
          year
          <input type="text" name="year" className="year" defaultValue={work.year} />
        </label>

        <label>
          instrumentation
          <input type="text" name="instrumentation" className="instrumentation" defaultValue={work.instrumentation} />
        </label>

        <label>
          publisher
          <input type="text" name="publisher" className="publisher" defaultValue={work.publisher} />
        </label>

        <input type="submit" value="Update" />
      </form>
    </div>
  );
}

export default EditWork;
