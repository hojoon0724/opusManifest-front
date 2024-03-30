import Header from '../components/header';
import Footer from '../components/footer';
import EditCatalog from '../components/editCatalog';
import { useLoaderData } from 'react-router-dom';

function Dashboard() {
  const data = useLoaderData();

  return (
    <div className="page-wrapper">
      <div className="top-container">
        <Header />
        <div className="catalog-container">
          <EditCatalog data={data} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
