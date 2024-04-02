import Header from '../components/header';
import Footer from '../components/footer';
import { WorkDetails } from '../components/workDetails';
import { useLoaderData, Link } from 'react-router-dom';

function ShowComposition() {
  const data = useLoaderData();

  return (
    <div className="page-wrapper">
      <div className="top-container flex column">
        <Header />
        <div className="content-container" style={{ margin: 'auto' }}>
          <div className="spacer-small">&nbsp;</div>
          <Link to={`/`}>
            <div className="back-button"> Go Back</div>
          </Link>
          <WorkDetails work={data} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ShowComposition;
