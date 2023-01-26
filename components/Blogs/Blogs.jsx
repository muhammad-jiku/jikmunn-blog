import React from 'react';
import Link from 'next/link';

const Blogs = ({ blog }) => {
  return (
    <div className="max-w-sm py-6 mx-auto overflow-hidden rounded shadow-lg">
      <img
        src={`${blog?.picUrl}`}
        alt={`${blog?.title}`}
        className="w-100 h-100"
      />
      <div className="p-6">
        <div className="mb-2 text-xl font-bold"> {blog?.title} </div>
        <p className="text-base text-gray-700">
          {' '}
          {blog?.desc?.length < 50
            ? blog?.desc
            : blog?.desc?.slice(0, 50) + '...'}{' '}
        </p>
      </div>
      <div className="text-center">
        <Link
          href={`/blogs/${blog?.id}/`}
          className="p-4 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent"
        >
          Read More..
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
