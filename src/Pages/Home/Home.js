import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../Hook/useTitle';
import ServiceCard from '../Service/ServiceCard';
import Banner from './Banner';
import FAQ from './FAQ';
import NewsLetter from './NewsLetter';

const Home = () => {
    const [services, setServices] = useState([]);
    const [spinner, setSpinner] = useState(true);
    useTitle('Home');

    useEffect(() => {
        setSpinner(true);
        fetch('https://service-review-server-tawny.vercel.app/limitservices')
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                setServices(data);
                setSpinner(false);
            })
            .catch(err => {
                console.log(err.message);
                setSpinner(false);
            })
    }, [])

    if (spinner) {
        return <progress className=" mx-auto flex my-48 justify-center progress progress-warning w-56"></progress>
    }

    return (
        <div>
            {/* Homepage Banner Component */}
            <Banner></Banner>

            <h1 className='mb-12 text-4xl font-bold leading-none text-center sm:text-5xl text-indigo-800 dark:text-gray-100'>My Services</h1>
            {/* Homepage reverse sorted and limited service section */}
            <div className='sm:w-10/12 md:w-11/12 mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
                {
                    services.map(service =>
                        <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                }
            </div>
            <div className='flex justify-center my-14'>
                <Link to={'/services'}><button className="btn btn-outline btn-primary w-44">View All</button></Link>
            </div>

            {/* HomePage FAQ Section */}
            <div className='my-20'>
                <FAQ></FAQ>
            </div>

            {/* Homepage Newsletter Section */}
            <div className='mb-10'>
                <NewsLetter></NewsLetter>
            </div>
        </div>
    );
};

export default Home;