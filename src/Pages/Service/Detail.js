import React from 'react';


// Detail page of each service
const Detail = ({ detailService }) => {
    const { photourl, title, description, price } = detailService
    return (
        <div>
            <div className="px-6 py-2 mx-auto space-y-12">
                <article className="space-y-8 dark:text-gray-700">
                    <div className="space-y-6">
                        <h1 className=" text-center text-4xl font-bold md:tracking-tight md:text-5xl text-primary">{title}</h1>
                        <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-700">
                        </div>
                    </div>
                    <div>
                        <img src={photourl} alt=''></img>
                    </div>
                    <div className="dark:text-gray-700">
                        <p>{description}</p>
                    </div>
                    <div className="dark:text-gray-700">
                        <p><span className='font-semibold'>Package Price:</span> {price}</p>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Detail;