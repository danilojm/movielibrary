import { ReactComponent as GithubIcon } from "assets/img/gi_thub.svg";
import './styles.css';

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="mlibrary-nav-content">
          <h1 className="mlibrary-contact-title">Movies Library</h1>
          <a href="https://github.com/danilojm/movielibrary" target="_blank" rel="noreferrer">
            <div className="mlibrary-contact-container">
              <GithubIcon />
              <p className="mlibrary-contact-link">/danilojm</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
