import React, { useState } from 'react';
import './Numcount.css';

function NumCount() {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }
    function decrease() {
        setCount(count - 1);
    }

    return (
        <div className='counters-container'>
            <div className='counters-title'><h1>Counter</h1></div>
                <button className="btn btn-danger" onClick={decrease}>-</button>
                <span className='result'>{count}</span>
                <button className="btn btn-success" onClick={increase}>+</button>
        </div>);
}

export default NumCount;
