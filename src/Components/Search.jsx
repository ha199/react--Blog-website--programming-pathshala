import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./Header";

import "./categories.css";
import HorizontalBlog from "./HorizontalBlog";
import Footer from "./Footer";

const Search = () => {
  const { searchId } = useParams();
  const [fetchedBlogs, setFetchedBlogs] = useState();
  const URL = `http://localhost:5000/api/blogs?q=${searchId}`;
  useEffect(() => {
    try {
      fetch(URL)
        .then((response) => response.json())
        .then((data) => setFetchedBlogs(data));
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <React.Fragment>
      <Header />
      <div className="category-blog-head">
        <h2>{searchId}</h2>
        <p className="results">{fetchedBlogs?.length} Results</p>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>

      <div className="horizontal-blogs">
        <div className="search-blogs row">
          {fetchedBlogs?.map((blog) => {
            return <HorizontalBlog key={blog.id} fetchedBlogs={blog} />;
          })}
        </div>
      </div>
      <Footer/>
    </React.Fragment>
  );
};

export default Search;
