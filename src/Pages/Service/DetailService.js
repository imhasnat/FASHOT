import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailService = () => {
    const detailService = useLoaderData();
    const { title, description } = detailService[0]
    return (
        <div>
            <div className='w-9/12 mx-auto'>
                <h1 className='text-center'>{title}</h1>
                <p>{description}</p>
            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    );
};

export default DetailService;