"use client"

import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className='flex flex-col items-center justify-content min-h-screen bg-grey-100'>
            <p className='text 2x1 font-semibold mb-4'>
            You clicked <span className='text-blue-600'>{count}</span> times
            </p>
            <button
            onClick={() => setCount(count +1)}
            className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:right-blue-300'>
                Add
            </button>
<br/>
            <button
            onClick={() => setCount(count -1)}
            className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:right-blue-300'>
                Minus
            </button>
        </div> 
    );
}

export default Counter;