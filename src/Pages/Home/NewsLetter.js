import React from 'react';
import newsletter from '../../assests/newsletter.png';

const NewsLetter = () => {
    return (
        <section className="w-full md:w-9/12 mx-auto dark:text-gray-100 ">
            <div className="container flex flex-col justify-center items-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={newsletter} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
                <div className='flex justify-center items-center'>
                    <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 shadow-2xl text-gray-900'>
                        <div className='my-3'>
                            <p className='dark:text-gray-100'>Keep up to date with my blog posts, and anything else I'm working on, as well as gain access to newsletter exclusive content.
                                <br />
                                No spam, unsubscribe at any time.</p>
                        </div>
                        <form

                            noValidate=''
                            action=''
                            className='space-y-6 ng-untouched ng-pristine ng-valid'
                        >
                            <div className='space-y-4'>
                                <div>
                                    <label htmlFor='email' className='block mb-2 text-sm'>
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
                            </div>
                            <div>
                                <button
                                    type='submit'
                                    className='w-6/12 px-8 py-3 font-semibold rounded-md btn-primary text-gray-100'
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;