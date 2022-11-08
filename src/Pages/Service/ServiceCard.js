import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, photourl, price, description } = service;
    return (
        <div className="card w-96 md:w-80 bg-base-100 shadow-xl">
            <figure><img src={photourl} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>
                    {
                        description.length > 150 ?
                            <>{description.slice(0, 100) + '....'}<Link to={`/detailservice/${_id}`}>See more</Link></>
                            :
                            description
                    }
                </p>
                <div className="card-actions justify-end">
                    <Link to={`/detailservice/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;