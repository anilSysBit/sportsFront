import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const MainNav = () => {
  // State to handle menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  const toggle = () => {
    setMenuOpen(!menuOpen);
  };



  return (
    <nav>
      <div className="part1">
        <Link to="/">
          <div className="logo">
            <img
              src="https://th.bing.com/th/id/OIG1.egQEJxg7JTBbpWL.xSuQ?pid=ImgGn"
              alt="logo"
            />
            <p>NSO</p>
          </div>
        </Link>
      </div>

      <div className={`part2 ${menuOpen ? 'responsive' : ''}`}>
        <ul>
          <li><Link to="/blogs">News</Link></li>
          <li><Link to="/sponsors">Sponsors</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/matches">Matches</Link></li>
          <li><Link to="/teams">Teams</Link></li>
          {/* <li><Link to="/blogs">Blog</Link></li> */}
          {/* <li ><Link to="/subscribe">Subscribe</Link></li> */}
          <li className="join_now_button"><Link to="/register">Register Team</Link></li>
        </ul>
      </div>

      <div className="part3">
        {!menuOpen ? <span onClick={toggle}><MenuIcon/></span>:<span onClick={toggle}><CloseIcon/></span>}
      </div>
    </nav>
  );
};

export default MainNav;