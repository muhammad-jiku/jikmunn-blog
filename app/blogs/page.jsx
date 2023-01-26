import React from 'react';

//  internal import
import Blogs from '@/components/Blogs/Blogs';

const getBlogs = async () => {
  const res = await fetch('http://localhost:3000/api/blogs');
  const data = await res.json();
  return data;
};

const page = async () => {
  const blogs = await getBlogs();
  return (
    <div>
      {blogs?.data?.map((blog, idx) => (
        <Blogs key={idx} blog={blog} />
      ))}
    </div>
  );
};

export default page;
