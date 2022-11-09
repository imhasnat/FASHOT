import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import CommetOfService from './CommetOfService';
import Detail from './Detail';
import ServiceReview from './ServiceReview';

const DetailService = () => {
    const detailService = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, title } = detailService[0];
    return (
        <div>
            {/* Service Detail Section */}
            <div className='w-11/12 md:w-10/12 mx-auto bg-gray-100 my-10 md:p-10 rounded-md shadow-lg'>
                <Detail detailService={detailService[0]}></Detail>
            </div>

            {/* All Reviews about the Service */}
            <div className='my-10'>
                <h1 className='text-4xl font-bold text-center mb-10 text-primary'>People Review About My Work</h1>
                <CommetOfService id={_id}></CommetOfService>
            </div>

            {/* Review Input Section */}
            {
                user?.uid ?
                    <>
                        <div className='text-center w-10/12 mx-auto my-10'>
                            <ServiceReview id={_id} title={title}></ServiceReview>
                        </div>
                    </>
                    :
                    <>
                        <div className='my-10'>
                            <h1 className='text-center'>Please <Link className='text-primary' to={'/login'}> <button>Login</button> </Link> To Add a Review</h1>
                        </div>
                    </>
            }
        </div>
    );
};

export default DetailService;