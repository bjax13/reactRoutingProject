import React from 'react';
import {Link} from 'react-router';

class Nav extends React.Component {
  render() {
    return (
      <div className='nav-bar'>
        <Link to="/" > Home</Link>
        <Link to="/store" > Store</Link>

        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Nav;
