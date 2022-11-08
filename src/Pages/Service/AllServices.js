import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const AllServices = () => {
    const services = useLoaderData();
    return (
        <div>
            <div className='mx-auto w-4/12 md:w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
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