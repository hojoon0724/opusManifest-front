import Header from '../components/header';
import Footer from '../components/footer';
import { AddNewWork } from '../components/addNewWork';
import { EditCatalog } from '../components/editCatalog';
import { useLoaderData } from 'react-router-dom';

function Dashboard() {
  const data = useLoaderData();

  return (
    <div className="page-wrapper">
      <div className="top-container">
        <Header />
        <div className="content-container">
          <div className="add-new-work-form-container">
            <AddNewWork />
          </div>
          <div className="existing-works-container">
            <EditCatalog data={data} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
