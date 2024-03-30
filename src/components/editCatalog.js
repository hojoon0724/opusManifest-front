// import { useState } from 'react';
import EditWork from './editWork';

export default function EditCatalog({ data }) {
  return (
    <div className="edit-catalog">
      {data.map((work, i) => (
        <EditWork work={work} key={i} />
      ))}
    </div>
  );
}
