import React from 'react';

// Review card of the user
const Reviews = ({ review }) => {
    const { comment, name, img, time } = review;
    //console.log(time);
    return (
        <div>
            <div className="container flex flex-row justify-between items-center w-full p-6 mx-auto  rounded-md  bg-gray-100 text-gray-900 ">
                <div className="p-4 space-y-2 text-sm text-gray-600">
                    <p>{comment}</p>
                </div>
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <div>
                            <img src={img} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                        </div>
                        <div>
                            <h4 className="font-bold">{name}</h4>
                            <span className="text-xs text-gray-600">{time.slice(11, 19)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;