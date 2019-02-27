import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="flex pa1 justify-between nowrap orange">
        <div className="flex flex-fixed black">
          <div className="fw7 mr1">Grocery List</div>
          <Link to="/" className="ml1 no-underline black">
            List
          </Link>
          <div className="ml1" />
          <Link to="/create" className="ml1 no-underline black">
            Add Item
          </Link>
          <hr />
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
