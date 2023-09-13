/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Bookmark from "./Bookmark";


const Bookmarks = ({bookmarks}) => {

   
    return (
        <div className="w-1/3 h-10">
            <h1 className=" text-center text-lime-600 text-3xl">Bookmarked Item: {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark =><Bookmark bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;