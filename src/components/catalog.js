// import { useState } from 'react';
import Work from './work';

export default function Catalog({ data }) {
  return (
    <div className="catalog">
      catalog here
      {data.map((work, i) => (
        <Work work={work} key={i} />
      ))}
    </div>
  );
}
