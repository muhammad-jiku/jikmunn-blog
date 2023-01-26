import BlogDetails from '@/components/Blogs/BlogDetails';
import React from 'react';

const blogsUrl = 'http://localhost:3000/api/blogs';

async function getBlogDetails(params) {
  // console.log(params);
  const id = await params?.slug;
  // console.log('id', id);
  const res = await fetch(blogsUrl);

  const blogs = await res.json();
  // console.log('blogs....', blogs);
  const blogdetails = blogs?.data?.filter(
    (item) => item?.id?.toString() === id?.toString()
  )[0];
  // console.log(blogdetails);
  return blogdetails;
}

const BlogDetailsPage = async ({ params }) => {
  // console.log(params);
  const blog = await getBlogDetails(params);
  // console.log(blogdetails);
  return (
    <div>
      {/* {blogdetails?.map((blog, idx) => ( */}
      {/* // console.log(blog) */}
      <BlogDetails blog={blog} />
      {/* ))} */}
    </div>
  );
};

export default BlogDetailsPage;

export async function generateStaticParams() {
  const res = await fetch(blogsUrl);
  const blogs = await res.json();
  // console.log(blogs);
  return blogs?.data?.map((item) => ({
    slug: item?.id?.toString(),
  }));
}
