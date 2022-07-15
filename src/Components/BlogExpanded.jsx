import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { blogData } from "../App";
import Header from "./Header";
import HorizontalBlog from "./HorizontalBlog";

import "./blogExpanded.css";
import Footer from "./Footer";

const BlogExpanded = () => {
  const { blogId } = useParams();
  const { fetchedBlogs } = useContext(blogData);
  const [selectedBlog, setSelectedBlog] = useState([]);

  useEffect(() => {
    setSelectedBlog(
      fetchedBlogs.filter((blog) => {
        return blog.id === blogId;
      })
    );
  }, [blogId, fetchedBlogs, setSelectedBlog]);

  console.log(selectedBlog);

  var d = new Date(selectedBlog[0]?.date).toString();
  var index = d.lastIndexOf(":") + 3;
  const date = d.substring(0, index);

  return (
    <React.Fragment>
      <Header />
      <div className="blog-expanded">
        <div className="blog-details">
          <img src={selectedBlog[0]?.thumbnail} alt="" />
          <div className="blog-details-inside">
            <Link to={`/blogs/${selectedBlog[0]?.id}`}>
              <h3>{fetchedBlogs[0]?.title}</h3>
            </Link>

            <p className="date">{date}</p>
            <p className="desc">{selectedBlog[0]?.description}</p>
            <p className="author"> by {selectedBlog[0]?.authorName}</p>
            <p className="categories">{selectedBlog[0]?.categories}</p>
          </div>
        </div>

        <div className=" recommended-categories">
          <Link to="/categories/Data-Structures-&-Algorithms">
            Data Structures
          </Link>
          <Link to="/categories/Interview-Preperation">
            Interview Preperation
          </Link>
          <Link to="/categories/Competitive-Programming">
            Competitive Programming
          </Link>
          <Link to="/categories/Student-Experiences">Student Experiences</Link>
          <Link to="/categories/About-Us">About Us</Link>
        </div>
      </div>

      <div className="like">
        {" "}
        <h3> You May Also like </h3>
        <div className="horizontal-blogs">
          <div className="row">
            {fetchedBlogs.splice(1, 3).map((blog) => {
              return <HorizontalBlog key={blog.id} fetchedBlogs={blog} />;
            })}
          </div>
        </div>
      </div>
      <Footer/>
    </React.Fragment>
  );
};

export default BlogExpanded;
