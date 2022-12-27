import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className='bg-[url("https://images.unsplash.com/photo-1586282023692-6bfbd629e85d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")] bg-no-repeat bg-cover'>
                <div className='h-64'>
                    
                </div>
                <div className='h-28 light_bg rounded-t-full shadow-2xl'>
                    <Link to='/addTask' className="avatar relative bottom-14 animate-bounce hover:animate-none ">
                        <div className="w-28 mask mask-hexagon medium_bg shadow-lg">
                            <h2 className='mt-11 font-bold text-white'>Add Task</h2>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='h-52 light_bg'>
                <h1 className='text-4xl font-bold text-purple-700 p-10'>Manage Your Everydays Tasks Smartly</h1>
            </div>
        </div>
    );
};

export default Home;