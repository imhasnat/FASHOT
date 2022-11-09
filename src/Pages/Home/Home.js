import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../Hook/useTitle';
import ServiceCard from '../Service/ServiceCard';
import Banner from './Banner';

const Home = () => {
    //const services = useLoaderData();
    const [services, setServices] = useState([]);
    const [spinner, setSpinner] = useState(true);
    useTitle('Home');

    useEffect(() => {
        setSpinner(true);
        fetch('http://localhost:5000/limitservices')
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