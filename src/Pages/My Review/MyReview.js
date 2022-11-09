import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ReviewCard from './ReviewCard';

const MyReview = () => {
    const [reviews, setReviews] = useState([]);
    const { user, updateData } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/myreview/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
            .catch(err => console.log(err.message))
    }, [user?.email, updateData])
    return (
        <div className='my-20 w-10/12 md:w-7/12 mx-auto'>
            {
                reviews.length > 0 ?
                    <>
                        {
                            reviews.map(review =>
                                <ReviewCard
                                    key={review._id}
                                    review={review}
                                ></ReviewCard>)
                        }
                    </>
                    :
                    <>
                        <h1 className='text-4xl font-semibold text-center my-10'>You have to give a review yet!</h1>
                    </>
            }
        </div>
    );
};

export default MyReview;