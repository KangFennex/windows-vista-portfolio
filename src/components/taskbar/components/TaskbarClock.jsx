import { useState, useEffect } from 'react';

const TaskbarClock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    const formatTime = (date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            {formatTime(currentTime)}
        </div>
    );
};

export default TaskbarClock;