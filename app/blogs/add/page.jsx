import AddBlog from '@/components/Blogs/AddBlog';
import React from 'react';

const addBlog = () => {
  // const addBlogHandler = async (data) => {
  //   const res = await fetch('http://localhost:3000/api/new-blog', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   });
  //   const blog = await res.json();
  //   console.log(blog);
  // }

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
