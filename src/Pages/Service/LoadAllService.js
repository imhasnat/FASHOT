import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const LoadAllService = ({ setCount, currentPage, limit }) => {
    const [services, setServices] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        setSpinner(true);
        const url = `https://service-review-server-tawny.vercel.app/services?page=${currentPage}&size=${limit}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCount(data.count);
                setServices(data.result);
                setSpinner(false);
            })
            .catch(err => {
                console.log(err.message);
                setSpinner(false);
            })
    }, [currentPage, limit, setCount])

    if (spinner) {
        return <progress className=" mx-auto flex my-48 justify-center progress progress-warning w-56"></progress>
    }
    return (
        <div>
            <div className='sm:w-10/12 md:w-11/12 mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
                {
                    services?.map(service =>
                        <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default LoadAllService;