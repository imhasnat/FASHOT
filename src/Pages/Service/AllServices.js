import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const AllServices = () => {
    const services = useLoaderData();
    return (
        <div className='my-20'>
            <div className='sm:w-10/12 md:w-11/12 mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
                {
                    services.map(service =>
                        <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;