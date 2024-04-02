import Header from '../components/header';
import Footer from '../components/footer';
import { AddNewWork } from '../components/addNewWork';
import { EditCatalog } from '../components/editCatalog';
import { useLoaderData } from 'react-router-dom';

function Dashboard() {
  console.log(`dashboard`);
  const data = useLoaderData();

  return (
    <div className="page-wrapper">
      <div className="top-container flex column">
        <Header />
        <div className="content-container flex column">
          <div className="add-new-work-form-container">
            <div className="add-new-work-title">Add new work</div>
            <AddNewWork />
          </div>
          <hr style={{ margin: '48px 0px' }} />
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
