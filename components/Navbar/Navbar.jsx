import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="p-4">
      <ul className="flex justify-around">
        <li className="px-4 py-2 font-bold text-white bg-blue-700 rounded-full hover:bg-blue-500">
          <Link href={`/`}> Home</Link>
        </li>{' '}
        <li className="px-4 py-2 font-bold text-white bg-blue-700 rounded-full hover:bg-blue-500">
          <Link href={`/blogs/`}> Blogs</Link>
        </li>{' '}
        <li className="px-4 py-2 font-bold text-white bg-blue-700 rounded-full hover:bg-blue-500">
          <Link href={`/blogs/add/`}> Add Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
