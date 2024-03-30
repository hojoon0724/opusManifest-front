import Header from '../components/header';
import Footer from '../components/footer';
import Catalog from '../components/catalog';
import { useLoaderData } from 'react-router-dom';

function Compositions() {
  const data = useLoaderData();

  return (
    <div className="page-wrapper">
      <div className="top-container">
        <Header />
        <div className="catalog-container">
          <Catalog data={data} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Compositions;
