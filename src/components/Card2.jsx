import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Card.css";

const Card2 = () => {
  const [blog, setBlog] = useState();
  const { id } = useParams();
//   const handleDelete = async () => {
//     await axios
//       .delete("http://localhost:5000/post/delete/" + id)
//       .then((res) => {
//         console.log(res);
//         window.location.reload(false);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

  useEffect(() => {
    const getBlog = async () => {
      await axios
        .get("http://localhost:5000/post/" + id)
        .then((res) => {
            console.log(res.data);
          setBlog(res);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getBlog();
  }, []);
  return (
    (blog && <div className="card">
      <div className="card__top">
        <img src={blog.imgUrl} alt="" className="card__img" />
      </div>
      <div className="card__bottom">
        <h3>{blog.title}</h3>
        <h6 className="card__author">{blog.author}</h6>
        <span className="card__date">{blog.createdAt}</span>

        <p className="card__desc">{blog.content}</p>

        {/* <a onClick={handleDelete} className="secondary">
          Delete
        </a> */}
      </div>
    </div>)
  );
};

export default Card2;
