/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog/Blog";


const Blogs = ({handleAddTo}) => {


    const[blogs,setBlogs] =  useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    

    return (
        <div className="w-3/4">
            <h1>Blogs Here: {blogs.length} </h1>

            {
                blogs.map(blog => <Blog handleAddTo={handleAddTo} key={blog.id} blog={blog}></Blog>)
            }
        </div>
       
    );
};

export default Blogs;