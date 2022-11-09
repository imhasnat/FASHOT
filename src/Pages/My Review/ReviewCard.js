import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const ReviewCard = ({ review }) => {
    const { _id, comment } = review;
    const { updateData, setUpdateData } = useContext(AuthContext);
    const [updateComment, setUpdateComment] = useState('');
    const [clickId, setClickId] = useState(0);

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
                    console.log(data);
                    setUpdateData(!updateData);
                })
                .catch(err => console.log(err.message))
        }
    }

    const handleBlur = event => {
        const comment = event.target.value;
        setUpdateComment(comment);
    }

    return (
        <div>
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

            <p>{ } {comment} <label htmlFor={_id} className="btn">Update</label> <button className='btn' onClick={() => handleDelete(_id)}>delete</button> </p>
            <div>
                {/* The button to open modal */}
            </div>
        </div>
    );
};

export default ReviewCard;