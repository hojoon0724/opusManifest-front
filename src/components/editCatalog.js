import { useState } from 'react';
import EditWork from './editWork';

export function EditCatalog({ data }) {
  const [workDetails, setWorkDetails] = useState(data);
  const reloadData = async () => {
    setWorkDetails(data);
  };

  //todo add action functions
  //todo useSharedState to close all accordions

  return (
    <div className="edit-catalog">
      {workDetails.map((work, i) => (
        <EditWork work={work} key={i} reload={reloadData} />
      ))}
    </div>
  );
}
