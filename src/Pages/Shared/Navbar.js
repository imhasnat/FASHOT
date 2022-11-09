import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import icon from '../../assests/icon.png';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-indigo-800">
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                    >
                        <img src={icon} alt="" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                            Fashot
                        </span>
                    </Link>
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        <li>
                            <Link
                                to="/home"
                                aria-label="Home"
                                title="Home"
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services"
                                aria-label="My services"
                                title="My services"
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blog"
                                aria-label="My blog"
                                title="My blog"
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Blog
                            </Link>
                        </li>
                        {
                            user?.uid ?
                                <li>
                                    {
                                        user?.photoURL ?
                                            <img alt={user?.displayName} title={user?.displayName}
                                                className="w-10 h-10 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800"
                                                src={user?.photoURL}
                                                referrerPolicy="no-referrer"
                                            />
                                            :
                                            <p className='text-white text-xl' title={user?.displayName}><FaUser></FaUser></p>
                                    }
                                </li>
                                :
                                ''
                        }

                        {
                            user?.uid ?
                                <>
                                    <li>
                                        <Link
                                            onClick={logOut}
                                            aria-label="About us"
                                            title="logout"
                                            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                        >
                                            Logout
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/myreview"
                                            aria-label="Product pricing"
                                            title="Product pricing"
                                            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                        >
                                            My Review
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/addservice"
                                            aria-label="Product pricing"
                                            title="Product pricing"
                                            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                        >
                                            Add Service
                                        </Link>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <Link
                                            to="/login"
                                            aria-label="Sign in"
                                            title="Sign in"
                                            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                        >
                                            Sign in
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/register"
                                            aria-label="Sign up"
                                            title="Sign up"
                                            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                                        >
                                            Sign up
                                        </Link>
                                    </li>
                                </>
                        }
                    </ul>
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-white" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full z-50">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="flex space-x-5">
                                                {
                                                    user?.uid ?
                                                        <>
                                                            {
                                                                user?.photoURL ?
                                                                    <img alt={user?.displayName} title={user?.displayName}
                                                                        className="w-10 h-10 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800"
                                                                        src={user?.photoURL}
                                                                        referrerPolicy="no-referrer"
                                                                    />
                                                                    :
                                                                    <p className='text-white text-xl' title={user?.displayName}><FaUser></FaUser></p>
                                                            }
                                                        </>
                                                        :
                                                        ''
                                                }
                                            </div>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4">
                                            <li>
                                                <Link
                                                    to="/services"
                                                    aria-label="My services"
                                                    title="My services"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Services
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/blog"
                                                    aria-label="My blog"
                                                    title="My blog"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Blog
                                                </Link>
                                            </li>
                                            {
                                                user?.uid ?
                                                    <>
                                                        <li>
                                                            <Link
                                                                to="/myreview"
                                                                aria-label="Product pricing"
                                                                title="Product pricing"
                                                                className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-teal-accent-400"
                                                            >
                                                                My Review
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to="/addservice"
                                                                aria-label="Product pricing"
                                                                title="Product pricing"
                                                                className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-teal-accent-400"
                                                            >
                                                                Add Service
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                onClick={logOut}
                                                                aria-label="About us"
                                                                title="logout"
                                                                className="font-medium tracking-wide text-gray-800 transition-colors duration-200 hover:text-teal-accent-400"
                                                            >
                                                                Logout
                                                            </Link>
                                                        </li>
                                                    </>
                                                    :
                                                    <>

                                                        <li>
                                                            <Link
                                                                to="login"
                                                                aria-label="Sign in"
                                                                title="Sign in"
                                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                            >
                                                                Sign in
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to="/register"
                                                                className="inline-flex items-center w-full h-12 font-medium tracking-wide text-gray-700 transition duration-200 "
                                                                aria-label="Sign up"
                                                                title="Sign up"
                                                            >
                                                                Sign up
                                                            </Link>
                                                        </li>

                                                    </>
                                            }
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;