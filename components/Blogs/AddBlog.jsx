'use client';
import React, { useRef } from 'react';

const AddBlog = () => {
  const titleRef = useRef();
  const picUrlRef = useRef();
  const descRef = useRef();

  const blogSubmitHandler = async () => {
    // e.preventDefault();
    const blogData = {
      title: titleRef?.current?.value,
      picUrl: picUrlRef?.current?.value,
      desc: descRef?.current?.value,
    };
    // addBlogHandler(blogData);
    const res = await fetch('http://localhost:3000/api/new-blog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blogData),
    });

    const blog = await res.json();
    console.log(blog);
  };
  return (
    <form
      onSubmit={blogSubmitHandler}
      className="w-full max-w-lg my-6 p-6 mx-auto border border-blue-300"
    >
      <div className="flex flex-wrap mb-6 mx-3">
        <label
          htmlFor="title"
          className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
        >
          Title
        </label>
        <input
          type="text"
          placeholder="Title"
          ref={titleRef}
          className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 appearance-none rounded focus:outline-none focus:bg-white"
        />
      </div>{' '}
      <div className="flex flex-wrap mb-6 mx-3">
        <label
          htmlFor="picUrl"
          className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
        >
          Image
        </label>
        <input
          type="text"
          placeholder="Image"
          ref={picUrlRef}
          className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 appearance-none rounded focus:outline-none focus:bg-white"
        />
      </div>{' '}
      <div className="flex flex-wrap mb-6 mx-3">
        <label
          htmlFor="desc"
          className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
        >
          Description
        </label>
        <input
          type="text"
          placeholder="Description"
          ref={descRef}
          className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 appearance-none rounded focus:outline-none focus:bg-white"
        />
      </div>
      <button
        type="submit"
        className="w-full p-4 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent"
      >
        Submit
      </button>
    </form>
  );
};

export default AddBlog;
