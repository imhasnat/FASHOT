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
                // console.log(data);
                setReviews(data);
            })
            .catch(err => console.log(err.message))
    }, [user?.email, updateData])
    return (
        <div>
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
                        <h1>You have to give review yet!</h1>
                    </>
            }
        </div>
    );
};

export default MyReview;