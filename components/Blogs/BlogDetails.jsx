import React from 'react';

const BlogDetails = ({ blog }) => {
  return (
    <div className="max-w-sm my-6 mx-auto overflow-hidden rounded shadow-lg">
      <img
        src={`${blog?.picUrl}`}
        alt={`${blog?.title}`}
        className="w-100 h-100"
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold"> {blog?.title} </div>
        <p className="text-base text-gray-700"> {blog?.desc} </p>
      </div>
    </div>
  );
};

export default BlogDetails;
