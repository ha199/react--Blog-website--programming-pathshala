import React, { useContext, useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import { blogData } from "../App";
import Header from "./Header";

import "./blogs.css";
import HorizontalBlog from "./HorizontalBlog";
import VerticleBlogs from "./VerticleBlogs";
import Footer from "./Footer";

const Blogs = () => {
  const navigate = useNavigate()
  const { fetchedBlogs } = useContext(blogData);
  const [searchItem, setSearchItem] = useState()
  
  const submitHandler=(e)=>{
    e.preventDefault()
    if (searchItem !== undefined) {
      navigate(`/search/${searchItem}`);
    } else {
      alert("Please Enter Valid Search Terms!")
    }
  }


  var d = new Date(fetchedBlogs[0]?.date).toString();
  var index = d.lastIndexOf(":") + 3;
  const date = d.substring(0, index);

  const dsa = fetchedBlogs.filter((blog)=>{
    return blog.categories[0] === 'Data Structures & Algorithms';
  })
  const ip = fetchedBlogs.filter((blog)=>{
    return blog.categories[0] === 'Interview Preperation';
  })
  const cp = fetchedBlogs.filter((blog)=>{
    return blog.categories[0] === 'Competitive Programming';
  })
  const tsc = fetchedBlogs.filter((blog)=>{
    return blog.categories[0] === 'Time and Space Complexities';
  })
  const se = fetchedBlogs.filter((blog)=>{
    return blog.categories[0] === 'Student Experiences';
  })
  const au = fetchedBlogs.filter((blog)=>{
    return blog.categories[0] === 'About Us';
  })


  return (
    <React.Fragment>
      <Header />
      <div className="featured-blog-head">
        <h2>Featured Blog</h2>
        <div>
          <form className="d-flex" role="search" onSubmit={submitHandler}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={e=>setSearchItem(e.target.value)}
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="blog-details">
        <img src={fetchedBlogs[0]?.thumbnail} alt="" />
        <div className="blog-details-inside">
          <Link to={`/blogs/${fetchedBlogs[0]?.id}`}><h3>{fetchedBlogs[0]?.title}</h3></Link>
          
          <p className="date">{date}</p>
          {/* <p className="desc">{fetchedBlogs[0]?.description}</p> */}
          <p className="author"> by {fetchedBlogs[0]?.authorName}</p>
          <p className="categories">{fetchedBlogs[0]?.categories}</p>
        </div>
      </div>

      <div className="horizontal-blogs">
        <div className="row">
         {fetchedBlogs.splice(1,3).map((blog)=>{
          return <HorizontalBlog key={blog.id} fetchedBlogs={blog}/>;
         })}
        </div>
      </div>

      <div className="verticle-blogs">
        <div className="row">
          <div className="col-9">
            {fetchedBlogs.splice(1,5).map((blog)=>{
              return <VerticleBlogs key={blog.id} fetchedBlogs={blog}/>
            })}
          </div>
          <div className="col-3 recommended-categories">
            <h4>Recommended Categories</h4>
            <Link to="/categories/Data-Structures-&-Algorithms">Data Structures & Algorithms ({dsa.length})</Link>
            <Link to="/categories/Interview-Preperation">Interview Preperation ({ip.length})</Link>
            <Link to="/categories/Competitive-Programming">Competitive Programming ({cp.length})</Link>
            <Link to="/categories/Time-and-Space-Complexities">Time and Space Complexities ({tsc.length})</Link>
            <Link to="/categories/Student-Experiences">Student Experiences ({se.length})</Link>
            <Link to="/categories/About-Us">About Us ({au.length})</Link>
          </div>
        </div>

      </div>
      <Footer/>
    </React.Fragment>
  );
};

export default Blogs;
