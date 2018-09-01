import React from 'react';
import { Link } from 'react-router-dom';
import '../style/global.css';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <a>
              <img src="http://www.mesangelim.co.il/wp-content/uploads/2016/01/mesangelim_web.jpg" />
            </a>
          </Link>
          <ul className="nav">
            <li className="menu-item">
              <Link to="/" className="nav-link">
                <img class="home-button" src="http://www.mesangelim.co.il/images/home_btn.png" />
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="nav-link">
                ראשי
          </Link>
            </li>
            <li className="menu-item">
              <Link to="/login" className="nav-link">
                מסלולים
          </Link>
            </li>
            <li className="menu-item">
              <Link to="/register" className="nav-link">
                אפליקציות
          </Link>
            </li>
            <li className="menu-item">
              <Link to="/register" className="nav-link">
                סרטונים
          </Link>
            </li>
            <li className="menu-item">
              <Link to="/register" className="nav-link">
                כתבות
          </Link>
            </li>
            <li className="menu-item">
              <Link to="/register" className="nav-link">
                אודות
          </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;