import React from "react";

import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <h1 className="logo">Books</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
    );
  }
}
