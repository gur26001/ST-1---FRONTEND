import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <strong>Texhno Blogs</strong>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Make Post</a>
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
