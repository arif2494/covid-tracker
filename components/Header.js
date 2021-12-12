import Link from "next/link";
import { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className='relative flex flex-wrap items-center justify-between px-2 py-2 bg-indigo-600 mb-3'>
      <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
        <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
          <Link href='/'>
            <a className='text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white'>
              Covid Tracker
            </a>
          </Link>
          <button
            className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
            type='button'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <VscThreeBars className='text-3xl' />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id='example-navbar-danger'
        >
          <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
            <li className='nav-item'>
              <a
                className='px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75'
                href='#pablo'
              >
                <span className='ml-2 '>About Us</span>
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75'
                href='#pablo'
              >
                <span className='ml-2'>Contact Us</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
