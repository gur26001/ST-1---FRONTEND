import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <h2><strong>The Times of Hindustan</strong></h2>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#new">Make Post</a>
          </li>
          <li>
            <a href="#">All Posts</a>
          </li>
          <li>
            <Link to={"/loginSignin"}>
              <button className="loginsignin">
                  Login/Signin
              </button>
            </Link>
            
          </li>
            
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
