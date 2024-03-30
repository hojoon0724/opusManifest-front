// import { useState } from 'react';
import Work from './work';

export default function Catalog({ data }) {
  return (
    <div className="catalog">
      {data.map((work, i) => (
        <Work work={work} key={i} />
      ))}
    </div>
  );
}
