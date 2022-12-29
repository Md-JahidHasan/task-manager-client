import React from 'react';

const MyTask = () => {
    return (
        <div className='p-4 bg-slate-200'>
            <h1 className='p-4 text-3xl font-bold '>My Tasks</h1>
            <div className="card card-side bg-base-100 shadow-xl m-2">
                
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
                <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
            </div>
            <div className="card card-side bg-base-100 shadow-xl m-2">
                
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
                <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
            </div>
            
        </div>
    );
};

export default MyTask;