import BtnTheme from "./Btn-Theme/BtnTheme";
import "./Navbar-style.css";
import SearchBar from "./Search-Bar/SearchBar";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-title">Logo</div>

      <div className="search-bar">
        <SearchBar />
      </div>

      <div className="theme-mode">
        <BtnTheme />
      </div>
    </nav>
  );
}

export default Navbar;
