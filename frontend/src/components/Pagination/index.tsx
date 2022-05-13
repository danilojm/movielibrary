import { ReactComponent as Arrow } from "assets/img/seta.svg";
import './styles.css'

function Pagination() {
  return (
    <div className="mlibrary-pagination-container">
      <div className="mlibrary-pagination-box">
        <button className="mlibrary-pagination-button" disabled={true}>
          <Arrow />
        </button>
        <p>{`${1} de ${3}`}</p>
        <button className="mlibrary-pagination-button" disabled={false}>
          <Arrow className="mlibrary-flip-horizontal" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
