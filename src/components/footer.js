export default function Footer() {
  let currentDay = new Date();
  let currentYear = currentDay.getFullYear();
  return (
    <div className="footer">
      <div className="copyright">Copyright {currentYear}</div>
    </div>
  );
}
