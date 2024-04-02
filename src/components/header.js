import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header flex row">
      <div className="header-left">
        <div className="title">Mark Carlson</div>
        <div className="subtitle">composer</div>
      </div>
      <div className="header-right">
        <ul className="nav">
          <Link to={'/'}>Catalog</Link>
          <Link to={'/dashboard'}>Dashboard</Link>
        </ul>
      </div>
    </div>
  );
}
