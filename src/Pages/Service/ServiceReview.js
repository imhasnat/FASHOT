import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const ServiceReview = ({ id }) => {
    const { user } = useContext(AuthContext);
    //console.log(user.email);

    const handleSubmit = event => {
        event.preventDefault();
        const comment = event.target.review.value;
        const email = user?.email || 'Unregister';
        const name = user?.displayName || 'Not found';
        const img = user?.photoURL || 'Not found';
        const time = new Date();
        const review = {
            service: id,
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
                console.log(data);
            })
            .catch(err => console.log(err.message))
    }
    return (
        <div className=''>
            <form onSubmit={handleSubmit}>
                <textarea name='review' className="w-5/12 textarea textarea-primary" placeholder="Your review"></textarea> <br />
                <button type='submit' className="btn btn-outline btn-primary">Button</button>
            </form>
        </div>
    );
};

export default ServiceReview;