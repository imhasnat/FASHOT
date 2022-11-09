import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../Service/ServiceCard';
import Banner from './Banner';

const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <h1 className='text-4xl font-bold text-center mb-10 text-primary'>My Services</h1>
            <div className='sm:w-10/12 md:w-11/12 mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
                {
                    services.map(service =>
                        <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                }
            </div>
            <div className='flex justify-center my-10'>
                <Link to={'/services'}><button className="btn btn-outline btn-primary w-44">View All</button></Link>
            </div>
        </div>
    );
};

export default Home;