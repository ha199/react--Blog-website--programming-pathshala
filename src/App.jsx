import "./App.css";
import React,{ createContext, useEffect, useState }  from "react";
import { Routes, Route } from "react-router-dom";
import SetPassword from "./Components/SetPassword";
import Login from "./Components/Login";
import Blogs from "./Components/Blogs";
import Categories from "./Components/Categories";
import Search from "./Components/Search";
import BlogExpanded from "./Components/BlogExpanded";

export const blogData = createContext()

export default function App() {
  const [fetchedBlogs, setFetchedBlogs] = useState([])
  const URL = 'http://localhost:5000/api/blogs'
  useEffect(() => {
    try {
      fetch(URL)
    .then(response => response.json())
    .then(data => setFetchedBlogs(data));
    } catch (error) {
      console.log(error);
    }
    
  }, []);

  return (
    <React.Fragment>
      <blogData.Provider value={{
        fetchedBlogs
      }}>

      <Routes>
        <Route path='/' element={<Blogs/>}/>
        <Route path='/blogs'>
          <Route path=':blogId' element={<BlogExpanded/>}/>
        </Route>

        <Route path="/login" element={<Login/>} />
        <Route path="/setpassword" element={<SetPassword/>} />
        <Route path="/categories">
          <Route path=":cateId" element={<Categories/>}/>
        </Route>
        <Route path="/search">
          <Route path=":searchId" element={<Search/>}/>
        </Route>
      </Routes>
      </blogData.Provider>

    </React.Fragment>
  );
}


