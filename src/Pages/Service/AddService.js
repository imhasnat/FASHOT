import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../Hook/useTitle';
import service from '../../assests/service.jpg';
const AddService = () => {
    const navigate = useNavigate()
    useTitle('Add Services');

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const photourl = form.url.value;
        const price = form.price.value;
        const description = form.description.value;
        // const rating = form.rating.value;
        console.log(title, photourl, price, description);

        const service = {
            title,
            photourl,
            description,
            price
        }

        fetch('https://service-review-server-tawny.vercel.app/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                    toast.success('Service Added Successfully', {
                        position: toast.POSITION.TOP_CENTER, autoClose: 500
                    });
                    navigate('/services');
                }
            })
            .catch(err => console.log(err.message))
    }

    return (
        <div className="hero py-16">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={service} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full md:w-6/12 shadow-2xl bg-base-100">
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