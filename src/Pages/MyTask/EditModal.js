import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { default as api } from '../../store/apiSlice';

const EditModal = ({info}) => {
    const { register, handleSubmit, resetField } = useForm();
    const [data, setData] = useState();
    // console.log(info);

    const [editAndUpdateTask] = api.useEditAndUpdateTaskMutation();
    
    const handleUpdateTask = (data)=>{
        // const 
        const taskId = info?._id;
        const updatedTaskSet = [{ _id: taskId }, data];
        editAndUpdateTask(updatedTaskSet)
        console.log(updatedTaskSet);

    }


    return (
        <>
            <input type="checkbox" id="task-editing-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="task-editing-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Update the task, "{info?.taskName}"</h3>

                    <form onSubmit={handleSubmit(handleUpdateTask)} action="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your previous task name:</span>
                            </label>
                            <h2 className='text-start bg-purple-100 rounded-md py-3 px-4 font-bold'>{info?.taskName}</h2>
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Enter new task name:</span>
                            </label>
                            <input {...register('taskName')} type="text" placeholder="Task Name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your previous task details:</span>
                            </label>
                            <h2 className='text-start bg-purple-100 rounded-md py-3 px-4 font-bold'>{info?.taskDetail}</h2>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter New Task Details:</span>
                            </label>
                            <textarea {...register('taskDetail')} className="textarea textarea-bordered" placeholder="Add Details"></textarea>
                        </div>
                        <button type='submit'  className="btn btn-primary mt-3 w-full">Update</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EditModal;