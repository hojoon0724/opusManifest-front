import Header from '../components/header';
import Footer from '../components/footer';
import { AddNewWork } from '../components/addNewWork';
import { EditCatalog } from '../components/editCatalog';
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Dashboard() {
  let data = useLoaderData();
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const sorted = [...data].sort((a, b) => a.url < b.url);
    setSortedData(sorted);
  }, [data]);

  console.dir(data);

  return (
    <div className="page-wrapper">
      <div className="top-container flex column">
        <Header />
        <div className="content-container flex column">
          <div className="add-new-work-form-container">
            <AddNewWork />
          </div>
          <hr />
          {/* <hr style={{ margin: '48px 0px' }} /> */}
          <div className="existing-works-container">
            <EditCatalog data={sortedData} />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
