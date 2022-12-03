import axios from 'axios';
import React, { useState } from 'react'
import './Main.css'

const Main = ({setBlogs, blogs}) => {

    const [title, setTitle] = useState("");
    const [imgUrl, setImgUrl] = useState();
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    const handleClick = async (e) => {

        e.preventDefault();

        await axios.post('http://localhost:5000/post/create', {
            title,
            imgUrl,
            content,
            author            
        })
        .then((res) => {
            setBlogs([res.data, ...blogs])
        })
        .catch((error) => {
            console.log(error);
        })
    }
  return (
    <section>
        <div className="main">
            <h1>Create Blog</h1>
            <div className="main__container">
                <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                <input type="text" placeholder='ImageURL' value={imgUrl} onChange={(e) => setImgUrl(e.target.value)}/>
                <input type="text" placeholder='Author' value={author} onChange={(e) => setAuthor(e.target.value)}/>
                <textarea className='main__content' value={content} placeholder='Content' onChange={(e) => setContent(e.target.value)}>
                </textarea>

                <button onClick={handleClick} className='main__btn'>Submit</button>
            </div>
        </div>
    </section>
  )
}

export default Main