import React from 'react';

//  internal import
import AddBlog from '@/components/Blogs/AddBlog';

const addBlog = () => {
  return (
    <div>
      <h1 className="text-center text-xl font-bold uppercase text-blue-600 underline my-6">
        Add a blog
      </h1>
      <AddBlog />
    </div>
  );
};

export default addBlog;
