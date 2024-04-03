// import { useState } from 'react';
import Work from './work';

export default function Catalog({ data }) {
  return (
    <div className="catalog">
      <div className="composition-data-key" style={{ alignItems: 'end', fontSize: '1rem' }}>
        <div className="year" style={{ fontSize: 'inherit' }}>
          Year
        </div>
        <div className="work-title-wrapper">
          <div className="title" style={{ fontSize: 'inherit' }}>
            Title
          </div>
        </div>
        <div className="instrumentation" style={{ fontSize: 'inherit' }}>
          Instrumentation
        </div>
        <div className="category" style={{ fontSize: 'inherit' }}>
          Category
        </div>
      </div>
      <hr />
      {data.map((work, i) => (
        <Work work={work} key={i} />
      ))}
    </div>
  );
}
