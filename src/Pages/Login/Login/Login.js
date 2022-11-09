import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../../Hook/useTitle';
import login from '../../../assests/login.jpg';

const Login = () => {
    const { logIn, setLoading, setUser, popupLogin } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';
    useTitle('Login');
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                form.reset();
                setUser(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
                console.error(error);
            })
            .finally(() => {
                setLoading(false)
            })

    }

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        popupLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate(from, { replace: true });

            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <section className="w-full lg:w-9/12 mx-auto my-10 dark:text-gray-100 ">
            <div className="container flex flex-col justify-center items-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={login} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
                <div className='flex justify-center items-center'>
                    <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 border border-indigo-800 shadow-lg text-gray-900'>
                        <div className='mb-2 text-center'>
                            <h1 className='my-3 text-4xl font-bold'>Sign in</h1>
                            <p className='text-sm text-gray-400'>
                                Sign in to access your account
                            </p>
                        </div>
                        <div className="my-6 space-y-4">
                            <button onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md hover:bg-gray-800 hover:text-gray-100 focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                </svg>
                                <p>Login with Google</p>
                            </button>

                        </div>
                        <div className="flex items-center w-full my-4">
                            <hr className="w-full text-gray-400"></hr>
                            <p className="px-3 text-gray-400">OR</p>
                            <hr className="w-full text-gray-400"></hr>
                        </div>
                        <form
                            onSubmit={handleLogin}
                            noValidate=''
                            action=''
                            className='space-y-6 ng-untouched ng-pristine ng-valid'
                        >
                            <div className='space-y-4'>
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
                                    <div className='flex justify-between'>
                                        <label htmlFor='password' className='text-sm mb-2'>
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
                            <div className='text-red-600'>
                                {error}
                            </div>
                            <div>
                                <button
                                    type='submit'
                                    className='w-full px-8 py-3 font-semibold rounded-md btn-primary text-gray-100'
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                        {/* <div className='space-y-1'>
                    <button className='text-xs hover:underline text-gray-400'>
                        Forgot password?
                    </button>
                </div> */}
                        <p className='px-6 text-sm text-center text-gray-400 m-5'>
                            Don't have an account yet?{' '}
                            <Link to='/register' className='hover:underline text-gray-600'>
                                Sign up
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;