import React from 'react';

const ReviewCard = ({ review }) => {
    const { _id, comment } = review

    const handleDelete = id => {

    }

    return (
        <div>
            <p>{comment} <button className='btn'>update</button> <button className='btn' onClick={() => handleDelete(_id)}>delete</button> </p>
        </div>
    );
};

export default ReviewCard;