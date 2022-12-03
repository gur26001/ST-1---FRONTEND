import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <h2><strong>ArtiBlogs</strong></h2>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#new">Make Post</a>
          </li>
          <li>
            <a href="#">All Posts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
