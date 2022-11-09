import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const ServiceReview = ({ id, title }) => {
    const { user, updateData, setUpdateData } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const comment = event.target.review.value;
        const email = user?.email || 'Unregister';
        const name = user?.displayName || 'Not found';
        const img = user?.photoURL || 'Not found';
        const time = new Date();
        const review = {
            service: id,
            title,
            name,
            img,
            email,
            comment,
            time
        }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                setUpdateData(!updateData);
                event.target.reset();
            })
            .catch(err => console.log(err.message))
    }
    return (
        <div className=''>
            <form onSubmit={handleSubmit}>
                <textarea name='review' className="w-11/12 md:w-8/12 h-32 textarea textarea-primary" placeholder="Your review"></textarea> <br />
                <button type='submit' className="btn btn-outline btn-primary w-3/12">Your Review</button>
            </form>
        </div>
    );
};

export default ServiceReview;