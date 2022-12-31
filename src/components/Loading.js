import React from 'react';

const Loading = () => {
    return (
        <div className='min-h-screen '>
            <div className='h-24 w-24 border-8 border-dashed border-purple-500 rounded-full animate-spin duration-75 mx-auto mt-10'>

            </div>
            <h1 className='text-3xl font-bold mt-4'>Loading...</h1>
        </div>
    );
};

export default Loading;