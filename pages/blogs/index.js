import React from 'react';

//  internal import
import Blogs from '@/components/Blogs/Blogs';

const BlogsPage = ({ blogs }) => {
  return (
    <div>
      {blogs?.map((blog, idx) => (
        <Blogs key={idx} blog={blog} />
      ))}
    </div>
  );
};

export default BlogsPage;

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/blogs');
  const responseData = await res.json();
  const blogs = await responseData?.data;
  return {
    props: { blogs },
  };
};
