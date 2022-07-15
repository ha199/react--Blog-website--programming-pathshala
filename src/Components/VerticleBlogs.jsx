import React from 'react'
import {Link} from 'react-router-dom'


const VerticleBlogs = (props) => {
    var d = new Date(props.fetchedBlogs?.date).toString();
    var index = d.lastIndexOf(":") + 3;
    const date = d.substring(0, index);
  return (
    <div className='verticle-blog-cards'>
    <div className="blog-details">
      <img src={props.fetchedBlogs?.thumbnail} alt="" />
      <div className="blog-details-inside">
      <Link to={`/blogs/${props.fetchedBlogs?.id}`}><h3>{props.fetchedBlogs?.title}</h3></Link>
        <p className="date">{date}</p>
        {/* <p className="desc">{fetchedBlogs[0]?.description}</p> */}
        <p className="author"> by {props.fetchedBlogs?.authorName}</p>
        <p className="categories">{props.fetchedBlogs?.categories}</p>
      </div>
    </div></div>
  )
}

export default VerticleBlogs