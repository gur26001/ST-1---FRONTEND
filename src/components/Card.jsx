import axios from 'axios'
import React from 'react'
import './Card.css'

const Card = ({blog}) => {

    const handleDelete = async () => {
        
        await axios.delete("http://localhost:5000/post/delete/"+blog._id).then((res) => {
            console.log(res);
            window.location.reload(false)
        }).catch((error) => {
            console.log(error);
        })
    }
  return (
    <div className='card'>
        <div className="card__top">
            <img src={blog.imgUrl} alt="" className="card__img" />
        </div>
        <div className="card__bottom">
            <h3>{blog.title}</h3>
            <h6 className="card__author">{blog.author}</h6>
            <span className="card__date">{blog.createdAt}</span>

            <p className="card__desc">
                {blog.content}
            </p>

            <a onClick={handleDelete} className='secondary'>Delete</a>
        </div>
    </div>
  )
}

export default Card