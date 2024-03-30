function Work({ work }) {
  const id = work.url.split('/')[4];
  return (
    <div className="composition-data" key={id}>
      <div className="title">{work.title}</div>
      <div className="subtitle">{work.subtitle}</div>
      <div className="year">{work.year}</div>
      <div className="instrumentation">{work.instrumentation}</div>
      <div className="publisher">{work.publisher}</div>
    </div>
  );
}

export default Work;
