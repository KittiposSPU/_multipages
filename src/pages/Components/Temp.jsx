import { useState } from 'react';
import './Temp.css';

function Temperatures() {

    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(0)
    const [kelvin, setKelvin] = useState(0)

    const handleCelsiusChange = (celsius) => {
        const c = parseFloat(celsius);
        setCelsius(c);
        setFahrenheit((c * 9 / 5) + 32);
        setKelvin(c + 273.15);
    }

    const handleFahrenheitChange = (fahrenheit) => {
        const f = parseFloat(fahrenheit);
        setFahrenheit(f);
        setCelsius((f - 32) * 5 / 9);
        setKelvin(((f - 32) * 5 / 9) + 273.15);
    }

    const handleKelvinChange = (kelvin) => {
        const k = parseFloat(kelvin);
        setKelvin(k);
        setCelsius(k - 273.15);
        setFahrenheit(((k - 273.15) * 9 / 5) + 32);
    }

    return ( 
    <div className='temperatures-container'>
        <h3 className='temperatures-title'>Temperatures</h3>
        <h3 className='temperatures-display'>
            <span className='badge bg-primary'>{celsius.toFixed(2)}C</span> 
            <span className='badge bg-primary'>{fahrenheit.toFixed(2)}F</span>
            <span className='badge bg-primary'>{kelvin.toFixed(2)}K</span>
        </h3>
        <div className='temperatures-variables'>
            <NumOP name={'Celsius'} value={celsius} setValue={handleCelsiusChange}/>
            <NumOP name={'Fahrenheit'} value={fahrenheit} setValue={handleFahrenheitChange} />
            <NumOP name={'Kelvin'} value={kelvin} setValue={handleKelvinChange} />
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

export default Temperatures;
