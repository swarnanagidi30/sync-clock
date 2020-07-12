import React, { useState } from 'react'
import './ClockEditor.scss';

export default function ClockEditor(props) {
    const { date, onClose } = props;
    const [hours, setHours] = useState(date.getHours());
    const [minutes, setMinutes] = useState(date.getMinutes());
    const [seconds, setSeconds] = useState(date.getSeconds());
    const handleClose = () => {
        if (onClose) { onClose(date); }
    }
    const handleOk = () => {
        const date = new Date();
        date.setHours(hours);
        date.setMinutes(minutes);
        date.setSeconds(seconds);
        if (onClose) { onClose(date); }
    }
    return (
        <div className="modal show-modal">
            <div className="modal-content">
                <span className="close-button" onClick={handleClose} >&times;</span>
                <h3>Edit Time</h3>
                <div className="clock-editor">
                    <select defaultValue={hours} onChange={(e) => setHours(e.target.value)}>
                        {[...Array(24)].map((x, i) =>
                            <option key={i} >{i}</option>
                        )}
                    </select>
                    :
                    <select defaultValue={minutes} onChange={(e) => setMinutes(e.target.value)}>
                        {[...Array(60)].map((x, i) =>
                            <option key={i} >{i}</option>
                        )}
                    </select>
                    :
                    <select defaultValue={seconds} onChange={(e) => setSeconds(e.target.value)}>
                        {[...Array(60)].map((x, i) =>
                            <option key={i} >{i}</option>
                        )}
                    </select>
                    <button className="ok-button" onClick={handleOk}>Ok</button>
                </div>

            </div>
        </div>

    )
}
