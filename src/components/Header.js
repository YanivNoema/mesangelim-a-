import React from 'react';
import { Link } from 'react-router-dom';
 import '..\\style\\global.css';


const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className="nav">
        
        <li className="menu-item">
          <Link to="/" className="nav-link">
            <img class="home-button" src="http://www.mesangelim.co.il/images/home_btn.png"/>
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
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/editor" className="nav-link">
            <i className="ion-compose"></i>&nbsp;New Post
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/settings" className="nav-link">
            <i className="ion-gear-a"></i>&nbsp;Settings
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to={`/@${props.currentUser.username}`}
            className="nav-link">
            <img src={props.currentUser.image} className="user-pic" alt={props.currentUser.username} />
            {props.currentUser.username}
          </Link>
        </li>

      </ul>
    );
  }

  return null;
};

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

          <LoggedOutView currentUser={this.props.currentUser} />

          <LoggedInView currentUser={this.props.currentUser} />
        </div>
      </nav>
    );
  }
}

export default Header;
