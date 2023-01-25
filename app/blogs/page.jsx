import Blogs from '@/components/Blogs/Blogs';
import React from 'react';

const getBlogs = async () => {
  const res = await fetch('http://localhost:3000/data.json');
  const data = await res.json();
  return data;
};

const page = async () => {
  const blogs = await getBlogs();
  return (
    <div>
      {blogs?.map((blog, idx) => (
        <Blogs key={idx} blog={blog} />
      ))}
    </div>
  );
};

export default page;
