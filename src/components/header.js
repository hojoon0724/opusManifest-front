export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <div className="title">Mark Carlson</div>
        <div className="subtitle">composer</div>
      </div>
      <div className="header-right">
        <ul className="nav">
          <a href="/catalog">Catalog</a>
        </ul>
      </div>
    </div>
  );
}
