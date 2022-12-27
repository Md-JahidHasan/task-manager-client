import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

const AddTask = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState();

    const handleMyTaskSubmit = (data) =>{
        console.log(data);
    }
    return (
        <div>
            <div className="min-h-screen bg-base-200">
                <div className="hero-content md:w-2/5 mx-auto">
                    
                    <div className="card  w-full  shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-4xl font-bold">Add New Task</h1>
                            <form onSubmit={handleSubmit(handleMyTaskSubmit)} action="">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">New Task</span>
                                    </label>
                                    <input {...register('taskName')} type="text" placeholder="Task Name" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Add details</span>
                                    </label>
                                    <textarea {...register('taskDetails')} className="textarea textarea-bordered" placeholder="Add Details"></textarea>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Add Photo</span>
                                    </label>
                                    <input {...register('taskImage')} type="file" className="file-input file-input-bordered  w-full " />
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn medium_bg">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTask;