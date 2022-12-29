import React, { useContext } from 'react';
import Loading from '../../components/Loading';
import { AuthContext } from '../../Contexts/AuthProvider/Authprovider';
import { default as api} from '../../store/apiSlice';

const MyTask = () => {
    const {user} = useContext(AuthContext);

    const [updateTaskComplete] = api.useUpdateTaskCompleteMutation()

    const handlerClick = (e) => {
        console.log(e.target.dataset.id);
        updateTaskComplete({ _id: e.target.dataset.id })
    }

    // console.log(api.useGetTasksQuery(user?.email));
    const { data, isFetching, isSuccess, isError} = api.useGetTasksQuery(user?.email);
    let Tasks;
    if(isFetching){
        Tasks = <Loading></Loading>
    }
    else if(isSuccess){
        if (data?.length === 0){
            Tasks = <div className='min-h-screen pt-28'>You have no any task. Please add your task..</div>
        }else if(data.length > 0){
        Tasks = data.map(v=><TaskCard info={v} key={v._id} handler={handlerClick} ></TaskCard>)}
    }
    else if(isError){
        Tasks = <div className='text-3xl font-bold min-h-screen py-40'> Error...</div>
    }
    // console.log(data?.length === 0);

    

    return (
        <div className='p-10'>
            <h1 className='font-bold'>My All Tasks</h1>
            {Tasks}
        </div>
    );
};


const TaskCard =({handler, info})=>{
    // console.log(data);
    return(
        <div className = "card card-side bg-base-100 shadow-xl m-6" >
            <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button onClick={handler} data-id={info._id}  className="btn btn-primary">Complete</button>
                    </div>
                </div>
                
            </div >
    )
}

export default MyTask;