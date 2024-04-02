// import { useState } from 'react';
import EditWork from './editWork';
import { updateAction } from '../actions';
import { useNavigate } from 'react-router-dom';

export function EditCatalog({ data }) {
  const navigate = useNavigate();
  // const [workDetails, setWorkDetails] = useState(data);
  // const reloadData = async () => {
  //   setWorkDetails(data);
  // };

  //todo add action functions
  const handleUpdate = async (formData, id) => {
    try {
      const updatedComposition = formData;
      await updateAction({ updatedComposition, id });
      // await reloadData();
    } catch (error) {
      console.error('Error updating work:', error);
    }
    return navigate('/dashboard');
  };

  //todo useSharedState to close all accordions

  return (
    <div className="edit-catalog">
      {data.map((work, i) => (
        // {workDetails.map((work, i) => (
        <EditWork work={work} key={i} handleUpdate={handleUpdate} />
      ))}
    </div>
  );
}
