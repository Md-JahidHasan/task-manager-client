import React from 'react';

const CompletedTask = () => {
    return (
        <div>
            <div className='mx-auto bg-blue-300 min-h-screen p-8'>
                <img className='mx-auto' src="https://media.istockphoto.com/id/884885992/vector/clipboard-and-x-mark-clip-board-and-red-round-icon-with-cross-mark-modern-flat-design-graphic.jpg?s=170667a&w=0&k=20&c=tGpM2wL1DyIdTfUptZLxiH7KwZ4BfZ8Psb8D7BTPUoA=" alt="" />
                <h2 className='text-2xl font-bold p-10'>There is not any completed task yet. Please complete your task...</h2>
            </div>
        </div>
    );
};

export default CompletedTask;