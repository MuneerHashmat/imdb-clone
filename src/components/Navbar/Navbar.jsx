import { BookmarkPlus, ChevronDown, Menu, Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  return (
    <nav>
      <button className="menu-tablet nav-item hover">
        <Menu />
      </button>
      <Link to={"/"}>
        <img src="/logo.png" alt="logo" width={64} />
      </Link>

      <button className="menu">
        <Menu />
        <p>Menu</p>
      </button>

      <form className="search-bar">
        <input type="text" placeholder="Search IMDb" />
        <button>
          <Search color="gray" />
        </button>
      </form>

      <Link to={"/"} className="imdb-pro link">
        <p>
          IMDb<span>Pro</span>
        </p>
      </Link>

      <div className="vertical-line"></div>

      <Link to={"/"} className="watchlist link">
        <BookmarkPlus size={16} />
        Watchlist
      </Link>

      <Link to={"/"} className="link">
        Sign In
      </Link>

      <button className="language">
        <span>EN</span>
        <ChevronDown size={14} />
      </button>

      <button className="use-app">Use app</button>

      <div className="mobile-nav">
        <div className="mobile-nav-items">
          <button className="menu-tablet">
            <Menu />
          </button>
          <Link to={"/"}>
            <img src="/logo.png" alt="logo" width={64} />
          </Link>
        </div>

        <div className="mobile-nav-items">
          <button onClick={() => setShowMobileSearch(true)}>
            <Search size={20} />
          </button>
          <Link to={"/"} className="link">
            Sign In
          </Link>
          <button className="use-app">Use app</button>
        </div>
        <div className={`search-bar-mobile ${showMobileSearch && "visible"}`}>
          <form>
            <input type="text" placeholder="Search IMDb" />
            <button>
              <Search />
            </button>
          </form>
          <button
          onClick={()=>setShowMobileSearch(false)}
          ><X /></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
