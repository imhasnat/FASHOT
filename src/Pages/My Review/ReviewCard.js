import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReviewCard = ({ review }) => {
    const { _id, comment, title } = review;
    const { updateData, setUpdateData } = useContext(AuthContext);
    const [updateComment, setUpdateComment] = useState('');
    const [clickId, setClickId] = useState(0);

    const handleDelete = id => {
        fetch(`http://localhost:5000/deletereview/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setUpdateData(!updateData);
                    toast.success('Review Deleted Successfully', {
                        position: toast.POSITION.TOP_CENTER, autoClose: 650
                    });
                }
            })
            .catch(err => console.log(err.message))
    }

    const handleUpdate = id => {
        setClickId(id);

    }

    const handleSubmit = event => {
        event.preventDefault();
        event.target.reset();
        console.log(updateComment, clickId);

        if (updateComment) {
            fetch(`http://localhost:5000/updatereview/${clickId}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ updateComment })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        setUpdateData(!updateData);
                        toast.success('Review Updated Successfully', {
                            position: toast.POSITION.TOP_CENTER, autoClose: 650
                        });
                    }
                })
                .catch(err => console.log(err.message))
        }
    }

    const handleBlur = event => {
        const comment = event.target.value;
        setUpdateComment(comment);
    }

    return (
        <div className='my-7 overflow-hidden'>
            <div className="container flex flex-col w-full p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-100 text-gray-900 ">
                <div className="flex justify-between p-4">
                    <div className="flex justify-between w-full space-x-4">
                        <div className=''>
                            <h4 className="font-bold">{title}</h4>
                        </div>
                        <div className='flex items-center'>
                            <label htmlFor={_id} className="mr-2 text-xl text-blue-500"><FaEdit></FaEdit></label>
                            <button className='text-red-500 text-xl' onClick={() => handleDelete(_id)}><FaTrashAlt></FaTrashAlt></button>
                        </div>
                    </div>

                </div>
                <div className="p-4 space-y-2 text-sm text-gray-600">
                    <p>{comment}</p>
                </div>
            </div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id={_id} className="modal-toggle" />
            <form onSubmit={handleSubmit} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor={_id} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='pt-5'>
                        <textarea onBlur={handleBlur} type="text" name='description' placeholder="Descriptoin" className="textarea textarea-bordered h-24 w-full" />
                    </div>
                    <div className="modal-action">
                        <button type='submit'><label onClick={() => handleUpdate(_id)} type='submit' htmlFor={_id} className="btn">Update</label></button>
                    </div>
                </div>
            </form>
            <div>
                {/* The button to open modal */}
            </div>
        </div>
    );
};

export default ReviewCard;