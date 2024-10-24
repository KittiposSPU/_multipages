import React, { useState } from 'react';
import './Timer.css';

function Timer() {
    const [time, setTime] = useState({ s: 0, m: 0, h: 0 });
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);

    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 1000));
    };

    let updatedS = time.s, updatedM = time.m, updatedH = time.h;

    const run = () => {
        if (updatedM === 60) {
            updatedH++;
            updatedM = 0;
        }
        if (updatedS === 60) {
            updatedM++;
            updatedS = 0;
        }
        updatedS++;
        return setTime({ s: updatedS, m: updatedM, h: updatedH });
    };

    const stop = () => {
        clearInterval(interv);
        setStatus(2);
    };

    const reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ s: 0, m: 0, h: 0 });
    };

    const resume = () => start();

    const formatTime = (value, unit) => {
        if (value > 0) {
            return `${value < 10 ? `0${value}` : value}${unit}`;
        }
        return '';
    };


    let timeDisplay = '0s';
    if (time.h > 0 || time.m > 0 || time.s > 0) {
        timeDisplay = '';
        timeDisplay += formatTime(time.h, 'h:');
        timeDisplay += formatTime(time.m, 'm:');
        timeDisplay += formatTime(time.s, 's');
    }

    return (
        <div className="timer-container">
            <div className="timer-title">
                <h1>Timer</h1>
            </div>

            <input type="text" className="timer-display" readOnly value={timeDisplay}></input>

            <div className="timer-button">
            <button className="btn btn-danger" onClick={reset}>Reset</button>
                {(status === 0) ?
                    <button className="btn btn-success" onClick={start}>Start</button> : ''
                }

                {(status === 1) ?
                    <button className="btn btn-warning" onClick={stop}>Pause</button> : ''
                }

                {(status === 2) ?
                    <button className="btn btn-success" onClick={resume}>Resume</button> : ''
                }

            </div>
        </div>
    );
}

export default Timer;

