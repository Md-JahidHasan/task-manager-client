import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';
import { AuthContext } from '../../Contexts/AuthProvider/Authprovider';
import { default as api} from '../../store/apiSlice';
import EditModal from './EditModal';

const MyTask = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const [task, setTask] = useState(null);

    const { data, isFetching, isSuccess, isError } = api.useGetTasksQuery(user?.email);
    const [updateTaskComplete] = api.useUpdateTaskCompleteMutation();
    const [deleteTask] = api.useDeleteTaskMutation();


    console.log(api.useGetTasksQuery(user?.email));
    const handlerClick = (e) => {
        console.log(e.target.dataset.id);
        updateTaskComplete({ _id: e.target.dataset.id })
        navigate('/completedTask')
    }

    const deleteHandlerClick =(e)=>{
        deleteTask({ _id: e.target.dataset.id });
        toast.success('Task Deleted..')
    }

    



    let Tasks;

    if(isFetching){
        Tasks = <Loading></Loading>
    }

    else if(isSuccess){
        if (data?.length === 0){
            Tasks = <div className='min-h-screen pt-28'>You have no any task. Please <Link className='text-blue-600' to='/addTask'>click here</Link> to add your task..</div>
        }else if(data?.length > 0){
            // console.log(data);
        Tasks = data.map(v=><TaskCard
            info={v}
            key={v._id}
            handler={handlerClick}
            deleteHandler={deleteHandlerClick}
            setTask={setTask}
            ></TaskCard>)}
    }
    
    else if(isError){
        Tasks = <div className='text-3xl font-bold min-h-screen py-40'> Error...</div>
    }

    

    return (
        <div className='p-10 bg-purple-100 min-h-screen'>
            <h1 className='font-bold'>My All Tasks</h1>
            {Tasks}
            <EditModal info={task}></EditModal>
        </div>
    );
};


const TaskCard =({handler, info, deleteHandler, setTask})=>{
    // console.log(data);
    return(
        <div className = "card sm:card-side bg-base-100 shadow-xl my-4 sm:m-6 " >
            <figure className='sm:w-[180px] h-[250px] object-cover'><img className='h-full w-full m-auto' src={info?.taskImage} alt="Movie" /></figure>
            
                <div className="card-body">
                <div className='text-end sm:invisible'>
                    <button onClick={deleteHandler} data-id={info._id} className="btn btn-xs bg-red-700 sm:text-end mr-2 mt-2 text-end  ">Delete</button>
                </div>
                    <h2 className="card-title bg-purple-100 p-2 rounded-sm">{info?.taskName}</h2>
                    <p className='text-start'> <span className='text-purple-600 font-bold'>Details:</span> {info?.taskDetail}</p>
                    <div className="card-actions justify-end">

                    <label
                    htmlFor="task-editing-modal"
                    className="btn btn-sm medium_bg"
                    onClick={()=>setTask(info)}
                    >Edit/Update</label>

                        <button onClick={handler} data-id={info._id}  className="btn btn-sm medium_bg">Complete</button>
                    </div>
                </div>
            <div>
                <button onClick={deleteHandler} data-id={info._id} className="btn btn-xs bg-red-700 sm:text-end mr-2 mt-2 text-start invisible sm:visible">Delete</button>
            </div>
            
                
            </div >
    )
}

export default MyTask;