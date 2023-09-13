
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks'


function App() {
 
   const[bookmarks,setBookmarks] = useState([])

   const handleAddTo =(blog) =>{
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
   }

  return (
    <>
  
      <h1 className='text-4xl text-center'>Knowledge Cafe</h1>
      <div className='flex mx-auto w-[1200px]'>
        <Blogs handleAddTo={handleAddTo}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
