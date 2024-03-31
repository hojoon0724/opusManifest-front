import Header from '../components/header';
import Footer from '../components/footer';

function Compositions() {
  const data = useLoaderData();

  return (
    <div className="page-wrapper">
      <div className="top-container">
        <Header />
        <div className="content-container"></div>
        <Footer />
      </div>
    </div>
  );
}

export default Compositions;
