import React from 'react';

//  internal import
import BlogDetails from '@/components/Blogs/BlogDetails';

const blogsUrl = 'http://localhost:3000/api/blogs';

async function getBlogDetails(params) {
  const id = await params?.slug;
  const res = await fetch(blogsUrl);
  const blogs = await res.json();
  const blogdetails = blogs?.data?.filter(
    (item) => item?.id?.toString() === id?.toString()
  )[0];
  return blogdetails;
}

const BlogDetailsPage = async ({ params }) => {
  const blog = await getBlogDetails(params);
  return (
    <div>
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;

export async function generateStaticParams() {
  const res = await fetch(blogsUrl);
  const blogs = await res.json();
  return blogs?.data?.map((item) => ({
    slug: item?.id?.toString(),
  }));
}
