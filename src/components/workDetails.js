export function WorkDetails({ work }) {
  console.log(work);
  return (
    <div className="details-work-details-wrapper flex column">
      <div className="details-composition-data flex column">
        <table className="details-table">
          <tbody>
            <tr>
              <td>title</td>
              <td>
                <div className="details-work-title-wrapper">
                  <div className="details-title">{work.title}</div>
                  <div className="details-subtitle">{work.subtitle}</div>
                </div>
              </td>
            </tr>
            <tr>
              <td>year</td>
              <td>
                <div className="details-year">{work.year}</div>
              </td>
            </tr>
            <tr>
              <td style={{ verticalAlign: 'top' }}>instrumentation</td>
              <td style={{ verticalAlign: 'top' }}>
                <div className="details-instrumentation">{work.instrumentation}</div>
              </td>
            </tr>
            <tr>
              <td style={{ verticalAlign: 'top' }}>category</td>
              <td style={{ verticalAlign: 'top' }}>
                <div className="details-category">{work.category}</div>
              </td>
            </tr>
            <tr>
              <td style={{ verticalAlign: 'top' }}>notes</td>
              <td style={{ verticalAlign: 'top' }}>
                <div className="details-notes">{work.notes}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
