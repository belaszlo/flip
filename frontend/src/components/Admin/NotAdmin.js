import { Link } from 'react-router-dom';
import { EmojiFrown } from 'react-bootstrap-icons';

export default function NotAdmin() {
  const sadFace = <EmojiFrown />;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center mt-3">
          <h1>
            Sajnáljuk, de nincs megfelelő jogosultságod az oldal megtekintéséhez.
            {sadFace}
          </h1>
          <p>Itt jutsz vissza a főoldalra:</p>
          <Link data-testid="backToHomePage" className="btn btn-m btn-success me-2" to="/">Vissza a főoldalra</Link>
        </div>
      </div>
    </div>
  );
}
