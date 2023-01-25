import React from 'react';

const AddBlog = () => {
  return (
    <form className="w-full max-w-lg my-6 p-6 mx-auto border border-blue-300">
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
          className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 appearance-none rounded focus:outline-none focus:bg-white"
        />
      </div>
    </form>
  );
};

export default AddBlog;
