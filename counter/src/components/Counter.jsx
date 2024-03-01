import React from 'react'
import { useState } from 'react';

export const Counter = () => {
    const [count, setcount] = useState(0);
    const increment = () => {
        setcount(count + 1);
        console.log("Count incremented to ", count + 1);
    }
    const decrement = () => {
        setcount(count - 1);
        console.log("Count decremented to ", count + 1);
    }
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div class="card container text-bg-dark p-3" style={{ width: '20rem', height: '20rem' }}>
                <h5 class="card-header fs-1">App</h5>
                <div class="card-body">
                    <h5 class="card-title"><span className='fs-3'>Count</span> = {count}</h5>
                    <div className='my-4'>
                    <button type="button" class="btn btn-success mx-2 my-3" onClick={()=>increment()}>Increment {count}</button><br/>
                    <button type="button" class="btn btn-danger" onClick={()=>decrement()}>Decrement {count}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
