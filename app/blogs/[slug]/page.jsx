import BlogDetails from '@/components/Blogs/BlogDetails';
import React from 'react';

async function getBlogDetails(params) {
  // console.log(params);
  const id = await params?.slug;
  // console.log('id', id);
  const res = await fetch('http://localhost:3000/data.json');

  const blogs = await res.json();
  // console.log('blogs....', blogs);
  const blogdetails = blogs?.filter(
    (item) => item?.id?.toString() === id?.toString()
  );
  // console.log(blogdetails);
  return blogdetails;
}

const BlogDetailsPage = async ({ params }) => {
  // console.log(params);
  const blogdetails = await getBlogDetails(params);
  return (
    <div>
      {blogdetails?.map((blog, idx) => (
        <BlogDetails key={idx} blog={blog} />
      ))}
    </div>
  );
};

export default BlogDetailsPage;

export async function generateStaticParams() {
  const res = await fetch('http://localhost:3000/data.json');
  const blogs = await res.json();
  // console.log(blogs);
  return blogs?.map((item) => ({
    slug: item?.id?.toString(),
  }));
}
