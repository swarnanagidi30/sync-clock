import React, { useState, useEffect, useRef, useCallback } from 'react'
import './DigitalClock.scss';
import ClockEditor from '../ClockEditor';

export default function DigitalClock(props) {
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
        <div className="digital-root">
            <div className="digital-clock">
                <div className="inner">
                    <span className="span" > {hours}</span>
                :<span className="span">{minutes}</span>
                :<span className="span">{seconds}</span>
                </div>
                <div className="clock-setting">
                    <i className="fa fa-cog" aria-hidden="true" onClick={handleEdit} ></i>
                </div>
            </div>
            {showEditor && <ClockEditor date={date} onClose={handleEditClose} />}
        </div>
    )
}
