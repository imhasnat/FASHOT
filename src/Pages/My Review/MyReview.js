import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hook/useTitle';
import ReviewCard from './ReviewCard';

const MyReview = () => {
    const [reviews, setReviews] = useState([]);
    const { user, updateData, logOut } = useContext(AuthContext);
    const [spinner, setSpinner] = useState(true);
    useTitle('My Review');

    useEffect(() => {
        setSpinner(true);
        fetch(`https://service-review-server-tawny.vercel.app/myreview?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json()
            })
            .then(data => {
                setReviews(data);
                setSpinner(false);
            })
            .catch(err => {
                console.log(err.message);
                setSpinner(false);
            })
    }, [user?.email, updateData, logOut])

    if (spinner) {
        return <progress className=" mx-auto flex my-48 justify-center progress progress-warning w-56"></progress>
    }

    return (
        <div className='my-20 w-10/12 md:w-7/12 mx-auto'>
            {
                // Conditional redering for checking whether is login or not
                // If login then he will able to post review otherwise have to login to post review
                reviews.length > 0 ?
                    <>
                        <div>
                            {
                                reviews.map(review =>
                                    <ReviewCard
                                        key={review._id}
                                        review={review}
                                    ></ReviewCard>)
                            }
                        </div>
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