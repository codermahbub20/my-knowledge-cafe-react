/* eslint-disable react/prop-types */
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleAddTo}) => {

    const {title,cover,author_img,author,posted_date,reading_time} = blog;

    return (
        <div>
            <h1 className="text-4xl mb-4">{title}</h1>
            <img className='w-full rounded-md' src={cover} alt="" />
           
           <div className="flex justify-between">
           <div className="flex p-5">
                <img className="w-14" src={author_img} alt="" />
                <div className="ml-4">
                    <h3>{author}</h3>
                    <p>{posted_date}</p>
                </div>
               
            </div>

            <div >
                <h1>{reading_time} min read</h1>
                <button onClick={() => handleAddTo(blog)}><FaBookmark className='text-red-500'></FaBookmark></button>
            </div>
           </div>
            
        </div>
    )
};

export default Blog;