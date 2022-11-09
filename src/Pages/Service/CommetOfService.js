import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Reviews from './Reviews';

const CommetOfService = ({ id }) => {
    const { updateData } = useContext(AuthContext)
    const [reviews, setReviews] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        setSpinner(true);
        fetch(`http://localhost:5000/review/${id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
                setSpinner(false);
            })
            .catch(err => {
                console.log(err.message);
                setSpinner(false);
            })
    }, [id, updateData])

    if (spinner) {
        return <progress className=" mx-auto flex my-48 justify-center progress progress-warning w-56"></progress>
    }

    return (
        <div className='w-11/12 md:w-7/12 grid grid-cols-1 gap-4 mx-auto'>
            {
                reviews.length > 0 ?
                    <>
                        {
                            reviews.map(review =>
                                <Reviews
                                    key={review._id}
                                    review={review}
                                ></Reviews>)
                        }

                    </>
                    :
                    <>
                        <h1 className='text-4xl font-semibold text-center my-10'>No review added for this service!</h1>
                    </>

            }
        </div>
    );
};

export default CommetOfService;