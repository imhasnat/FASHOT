import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../../Hook/useTitle';

const Register = () => {
    const { createUser, updateUserInfo, setLoading, setUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    useTitle('Registration');

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(async result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();

                const profile = {
                    displayName: name,
                    photoURL: photoUrl
                }
                await updateUserInfo(profile)
                    .then(() => {
                        setUser(user);
                    })
                    .catch(error => {
                        setError(error.message);
                        console.error(error);

                    })
                    .finally(() => {
                        setLoading(false)
                    })
                toast.success('Registration Complete', {
                    position: toast.POSITION.TOP_CENTER, autoClose: 500
                });
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
                toast.error(error.message, {
                    position: toast.POSITION.TOP_CENTER, autoClose: 700
                });
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div className='flex justify-center items-center py-16 bg-base-200'>
            <div className='flex flex-col max-w-md p-2 rounded-md sm:p-10 bg-base-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Register</h1>
                    <p className='text-sm text-gray-400'>Create a new account</p>
                </div>
                <form
                    onSubmit={handleRegister}
                    noValidate=''
                    action=''
                    className='space-y-12 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Full Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Enter Your Name Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-100 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <label htmlFor='photoUrl' className='block mb-2 text-sm'>
                                PhotoUrl
                            </label>
                            <input
                                type='text'
                                name='photoUrl'
                                id='photoUrl'
                                placeholder='Enter Your Photo Link Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-100 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                required
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-100 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between mb-2'>
                                <label htmlFor='password' className='text-sm'>
                                    Password
                                </label>
                            </div>
                            <input
                                type='password'
                                name='password'
                                id='password'
                                required
                                placeholder='Enter Your Password'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-100 focus:border-gray-900 text-gray-900'
                            />
                        </div>
                    </div>

                    <div className='space-y-2'>
                        <div>
                            <button
                                type='submit'
                                className='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </form>
                <div className='text-red-600'>
                    {error}
                </div>
                {/* <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm dark:text-gray-400'>
                        Signup with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div> */}

                {/* <div className='flex justify-center space-x-4'>
                    <button aria-label='Log in with Google' className='p-3 rounded-sm'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 32 32'
                            className='w-5 h-5 fill-current'
                        >
                            <path d='M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z'></path>
                        </svg>
                    </button>
                </div> */}
                <p className='px-6 mt-7 text-sm text-center text-gray-400'>
                    Already have an account yet?{' '}
                    <Link to='/login' className='hover:underline text-gray-600'>
                        Sign In
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default Register;