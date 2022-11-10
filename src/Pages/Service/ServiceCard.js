import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { _id, title, photourl, price, description } = service;
    return (
        <div className="card w-72 md:w-80 bg-base-100 shadow-xl">
            <figure>
                <PhotoProvider>
                    <PhotoView src={photourl}>
                        <img src={photourl} alt={title} />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>
                    {
                        description.length > 100 ?
                            <>{description.slice(0, 100) + '....'}<Link to={`/detailservice/${_id}`} className="font-semibold text-primary">See more</Link></>
                            :
                            description
                    }
                </p>
                <p><span className='font-semibold'>Price:</span> {price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/detailservice/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;