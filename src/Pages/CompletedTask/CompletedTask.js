import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import { AuthContext } from '../../Contexts/AuthProvider/Authprovider';
import {default as api} from '../../store/apiSlice'

const CompletedTask = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const [updateTaskNotCompleted] = api.useUpdateTaskNotCompletedMutation();
    const [deleteTask] = api.useDeleteTaskMutation();
    const [postComment] = api.usePostCommentMutation();

    const handlerClick = (e) =>{
        updateTaskNotCompleted({ _id: e.target.dataset.id });
        navigate('/myTask')
        // console.log(e.target.dataset.id);
    }

    const deleteHandlerClick =(e)=>{
        deleteTask({ _id: e.target.dataset.id })
        console.log({_id:e.target.dataset.id});
    }

    const commentHandlerClick =(e)=>{
        e.preventDefault()
        const comment = e.target.comment.value;
        const taskId = e.target.button.value;
        postComment([comment, { _id: taskId }])
        console.log([comment, { _id: taskId }]);
    }


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
            CompletedTasks = data.map(v => <TaskCard
                key={v?._id}
                info={v}
                handler={handlerClick}
                deleteHandler={deleteHandlerClick}
                commentHandler={commentHandlerClick}
            ></TaskCard>)
        }
    }

    else if(isError){
        CompletedTasks = <div className='text-3xl font-bold min-h-screen py-40'> Error...</div>
    }


    return (
        <div className='bg-purple-200 p-10 min-h-screen'>
            <h1 className='text-2xl font-bold my-4 pb-8'>Completed Task</h1>
            {CompletedTasks}
        </div>
    );
};


const TaskCard = ({ handler, info, deleteHandler, commentHandler }) => {
    // console.log(data);
    return (
        <div className="card sm:card-side bg-base-100 shadow-xl my-4 md:m-4" >
            <figure className='w-[270px] h-[350px] m-auto border-4 border-white'><img className='  w-full h-full' src={info?.taskImage} alt="Movie" /></figure>
            <div className="card-body">
                <div className='lg:flex'>
                    <div className='lg:w-3/5 bg-purple-100 p-4 rounded-md'>
                        <h2 className="card-title">{info?.taskName}</h2>
                        <p className='text-start text-sm'>{info?.taskDetail}</p>

                    </div>
                    <div className='lg:w-2/5 bg-purple-100 rounded-md md:mx-3 my-2'>
                        <h2 className='medium_bg rounded-t-md text-white'>Comments</h2>
                        {
                            info?.comments.length === 0 ? <div className='p-4'>No comments added..</div> : info.comments.map((comment, i) => <div key={i}><q>{comment}</q></div>)
                        }
                        <div>
                            <form onSubmit={commentHandler} action="">
                                <input name='comment' className='rounded-l-md p-2 my-2 ' placeholder='Write Comment' type="text" /><button type='submit' name='button' value={info._id} className="medium_bg rounded-r-md p-2 text-white">POST</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={handler} data-id={info._id} className="btn btn-primary btn-sm">Not Completed</button>
                    <button onClick={deleteHandler} data-id={info._id} className="btn bg-red-700 btn-sm">Delete</button>
                </div>
            </div>
            
            

        </div >
    )
}


export default CompletedTask;