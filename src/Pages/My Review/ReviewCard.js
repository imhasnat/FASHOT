import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const ReviewCard = ({ review }) => {
    const { _id, comment } = review;
    const { updateData, setUpdateData } = useContext(AuthContext);

    const handleDelete = id => {
        fetch(`http://localhost:5000/deletereview/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUpdateData(!updateData);
            })
            .catch(err => console.log(err.message))
    }

    return (
        <div>
            <p>{comment} <button className='btn'>update</button> <button className='btn' onClick={() => handleDelete(_id)}>delete</button> </p>
        </div>
    );
};

export default ReviewCard;