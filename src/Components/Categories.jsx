import {useParams} from 'react-router-dom'
import React, { useContext } from "react";
import {Link} from 'react-router-dom'
import { blogData } from "../App";
import Header from "./Header";

import "./categories.css";
import VerticleBlogs from "./VerticleBlogs";
import Footer from './Footer';

const Categories = () => {
    const {cateId} = useParams()
    const { fetchedBlogs } = useContext(blogData);
    const category = cateId.replace(/-/g, " ");

    const filteredBlogs = fetchedBlogs.filter((blog)=>{
        return blog.categories[0] === category
    })
  
  
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
        <div className="category-blog-head">
          <h2>{category}</h2>
          <Link to='/'><button>Home</button></Link>
           
        </div>

  
        <div className="verticle-blogs">
          <div className="row">
            <div className="col-9">
              {filteredBlogs.map((blog)=>{
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
}

export default Categories