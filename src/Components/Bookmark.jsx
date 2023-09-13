/* eslint-disable react/prop-types */


const Bookmark = ({bookmark}) => {
    const{title} = bookmark;
    return (
        <div>
            <h1 className="text-2xl p-4 bg-slate-200 rounded-lg  mt-2">{title}</h1>
        </div>
    );
};

export default Bookmark;