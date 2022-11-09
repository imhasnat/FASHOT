import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../Service/ServiceCard';
import Banner from './Banner';

const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className='mx-auto w-4/12 md:w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map(service =>
                        <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                }
            </div>
            <div className='flex justify-center my-10'>
                <Link to={'/services'}><button className="btn btn-outline btn-primary">View All</button></Link>
            </div>
        </div>
    );
};

export default Home;