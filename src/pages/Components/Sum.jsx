import { useEffect, useState } from 'react';
import './Sum.css';

function Add({aValue, bValue}) {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    useEffect(() => {
        setA(aValue||0);
        setB(bValue||0);
    }, [aValue, bValue]);


    return ( 
        <div className="add-container">
            <h3 className="add-title">Add</h3>
            <h2 className='add-display'>
                <span className='badge bg-secondary'>A = {a}</span>
                <span className='badge bg-primary'>A + B = {a+b}</span>
                <span className='badge bg-secondary'>B = {b}</span>
            </h2>
            <div className="add-variables">
                <NumOP type={'int'} name ={'A'} value={a} setValue={setA}/>
                <NumOP type={'int'} name ={'B'} value={b} setValue={setB}/>
            </div>
        </div>
     );
}

function NumOP({type, name, value, setValue}){
    return  (
        <div className='counter-container'>
            <h3 className='counter-title'>{name}</h3>
            <button className='btn btn-danger' onClick={() =>setValue(value - 1)} >-</button>
            <span className='counter-value'>{type && type ==='int' ? value : value.toFixed(2)}</span>
            <button className='btn btn-success' onClick={() => setValue(value + 1)}>+</button>
        </div>
    ) 
}

export default Add;