import React, { useContext } from 'react';
import Loading from '../../components/Loading';
import { AuthContext } from '../../Contexts/AuthProvider/Authprovider';
import {default as api} from '../../store/apiSlice'

const CompletedTask = () => {
    const {user} = useContext(AuthContext);
    // console.log(api.useGetCompleteTasksQuery(user?.email));
    const { data, isFetching, isSuccess, isError } = api.useGetCompleteTasksQuery(user?.email);
    let CompletedTasks;
    if(isFetching){
        CompletedTasks = <Loading></Loading>
    }
    else if(isSuccess){
        if(data?.length === 0){
            CompletedTasks = <div className='mx-auto bg-blue-300 min-h-screen p-8'>
                <img className='mx-auto' src="https://media.istockphoto.com/id/884885992/vector/clipboard-and-x-mark-clip-board-and-red-round-icon-with-cross-mark-modern-flat-design-graphic.jpg?s=170667a&w=0&k=20&c=tGpM2wL1DyIdTfUptZLxiH7KwZ4BfZ8Psb8D7BTPUoA=" alt="" />
                <h2 className='text-2xl font-bold p-10'>There is not any completed task yet. Please complete your task...</h2>
            </div>
        }else if(data?.length>0){
            CompletedTasks = data.map(v => <TaskCard key={v?._id}></TaskCard>)
        }
    }
    else if(isError){
        CompletedTasks = <div className='text-3xl font-bold min-h-screen py-40'> Error...</div>
    }
    return (
        <div className='bg-purple-200 p-10'>
            <h1 className='text-2xl font-bold my-4 pb-4'>Completed Task</h1>
            {CompletedTasks}
        </div>
    );
};


const TaskCard = ({ handler, info }) => {
    // console.log(data);
    return (
        <div className="card card-side bg-base-100 shadow-xl m-4" >
            <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                    <button onClick={handler}className="btn btn-primary">Not Completed</button>
                </div>
            </div>

        </div >
    )
}


export default CompletedTask;