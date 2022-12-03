import React from "react";
import { Link } from "react-router-dom";
import "./Blogs.css";
import Card from "./Card";

const Blogs = ({ blogs, setBlogs }) => {
  console.log(blogs);
  return (
    <section>
      <div className="blogs">
        <h1>Blogs</h1>
        <div className="blog__wrapper">
          {blogs &&
            blogs.map((blog) => (
              // <Link to={`/blog/${blog._id}`}>
                <Card blog={blog} key={blog._id} setBlogs={setBlogs} />
              // </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
