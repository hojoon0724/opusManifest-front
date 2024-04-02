import { Link } from 'react-router-dom';

function Work({ work }) {
  const id = work.url.split('/')[4];
  return (
    <>
      <Link to={`/compositions/${id}`}>
        <div className="composition-data" key={id}>
          <div className="year">{work.year}</div>
          <div className="work-title-wrapper">
            <div className="title">{work.title}</div>
            <div className="subtitle">{work.subtitle}</div>
          </div>
          <div className="instrumentation">{work.instrumentation}</div>
          <div className="category">{work.category}</div>
        </div>
        <hr />
      </Link>
    </>
  );
}

export default Work;
