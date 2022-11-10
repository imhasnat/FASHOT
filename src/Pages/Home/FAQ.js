import React from 'react';

const FAQ = () => {
    return (
        <section className=" dark:text-gray-100">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <h2 className="text-indigo-800 dark:text-gray-100 mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">How do we mitigate technical issues at the event?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>Photographers have at least two professional camera bodies, several lenses and a multitude of accessories specific to your shoot. Well maintained equipment is very reliable these days so it is very unlikely there will be an impact to capturing great photos at your event</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">How are the photos delivered?</summary>
                        <div className="px-4 pb-4">
                            <p>The photos are delivered via a private secure download link. The link can be enabled to be shareable with your full event and media team.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">What happens if I lose my images after 3 months time?</summary>
                        <div className="px-4 pb-4">
                            <p>After 3 months it depends on how much new data has been added to the archives so no definitive time after that. There’s a possibility we may still have a copy in our photo archives.

                                But it depends on whether it’s just after a few months or years. Computers are very reliable these days so hopefully you won’t have any technology mishaps. Please get back in touch anytime down the track and we’re happy to have a look.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">What are the image specifications?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>One set of files will be delivered in hi resolution, which is great for your archiving and safe keeping. Some people use them as they are for printing. You will also receive a set of web resolution files ready for social sharing.</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default FAQ;