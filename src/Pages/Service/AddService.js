import React from 'react';

const AddService = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const photourl = form.url.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        console.log(title, photourl, price, rating, description);

        const service = {
            title,
            photourl,
            description,
            price,
            rating
        }

        fetch('http://localhost:5000/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err.message))
    }


    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col w-5/12">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" name='title' placeholder="Title" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name='url' placeholder="Photo Url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' placeholder="Price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name='rating' placeholder="rating" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Descriptoin</span>
                            </label>
                            <textarea type="text" name='description' placeholder="Descriptoin" className="textarea textarea-bordered h-24" />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Add To Service</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;