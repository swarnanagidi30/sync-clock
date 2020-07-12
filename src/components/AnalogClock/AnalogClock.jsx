import React, { useState, useEffect, useRef, useCallback } from 'react'
import './AnalogClock.scss';
import ClockEditor from '../ClockEditor';

export default function AnalogClock(props) {
    const { date, datediff, onDateChange } = props;
    const refClockInterval = useRef(null);

    const [hours, setHours] = useState(date.getHours());
    const [minutes, setMinutes] = useState(date.getMinutes());
    const [seconds, setSeconds] = useState(date.getSeconds());
    const [showEditor, setShowEditor] = useState(false)

    const handleDate = useCallback(
        () => {
            const formatTime = (time) => {
                return time < 10 ? `0${time}` : time;
            }
            date.setHours(date.getHours() + (datediff || 0));
            setHours(formatTime(date.getHours()));
            setMinutes(formatTime(date.getMinutes()));
            setSeconds(formatTime(date.getSeconds()));
        },
        [datediff, date],
    );

    useEffect(() => {

        refClockInterval.current = setInterval(handleDate, 1000);
        return () => {
            clearInterval(refClockInterval.current);
            console.log('cleared');
        }
    }, [datediff, refClockInterval, date, handleDate])

    const secondsDeg = seconds * 360 / 60;
    const minutesDeg = (minutes * 360 / 60) + (seconds * 360 / 60) / 60;
    const hoursDeg = hours * 360 / 12 + ((minutes * 360 / 60) / 12);

    const secondsStyle = {

        transform: `rotate(${secondsDeg}deg) translate(-50%, -50%)`
    };
    const minutesStyle = {
        transform: `rotate(${minutesDeg}deg) translate(-50%, -50%)`
    };
    const hoursStyle = {
        transform: `rotate(${hoursDeg}deg) translate(-50%, -50%)`
    };

    const handleEdit = () => {
        clearInterval(refClockInterval.current);
        setShowEditor(true);
    }
    const handleEditClose = (date) => {
        refClockInterval.current = setInterval(handleDate, 1000);
        setShowEditor(false);
        onDateChange(date);
    }
    return (
        <div className="analog-root">
            <div className={"analog-clock"}>
                <div className={"inner"}>
                    <div className={"hand second"} style={secondsStyle} />
                    <div className={"hand minute"} style={minutesStyle} />
                    <div className={"hand hour"} style={hoursStyle} />
                    <div className="graduations">
                        {[...Array(60)].map((x, i) =>
                            <div className="graduation" key={i} />
                        )}
                    </div>
                </div>
                <div className="clock-setting">
                    <i className="fa fa-cog" aria-hidden="true" onClick={handleEdit} ></i>
                </div>
                {showEditor && <ClockEditor date={date} onClose={handleEditClose} />}
            </div>
        </div>
    );
}
