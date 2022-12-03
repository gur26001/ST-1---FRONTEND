import { useEffect, useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Main from "./components/Main";
import axios from "axios";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Card from "./components/Card";
import Card2 from "./components/Card2";

function App() {
  const [blogs, setBlogs] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Main setBlogs={setBlogs} blogs={blogs} />
          <Blogs blogs={blogs} setBlogs={setBlogs} />
        </>
      ),
    },
    {
      path: "/blog/:id",
      element: (
        <>
          <Header />
          <Card2/>
        </>
      ),
    },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/post/all")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
