import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-around">
        <li className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">
          <Link href={`/`}> Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
