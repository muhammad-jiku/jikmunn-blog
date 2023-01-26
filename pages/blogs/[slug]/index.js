import BlogDetails from '@/components/Blogs/BlogDetails';
import React from 'react';

const blogsUrl = 'http://localhost:3000/api/blogs';

const BlogInfoPage = () => {
  return (
    <div>
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogInfoPage;

export const getStaticPaths = async () => {
  const res = await fetch(blogsUrl);
  const responseData = await res.json();

  const blogs = await responseData?.data;
  const paths = blogs.map((item) => {
    return {
      params: { slug: item?.id?.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.slug;
  const res = await fetch(blogsUrl);
  const responseData = await res.json();

  const blogs = await responseData?.data;
  const blog = blogs.filter(
    (item) => item?.id?.toString() === id?.toString()
  )[0];
  return {
    props: { blog },
  };
};
