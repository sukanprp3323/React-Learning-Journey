import { useEffect, useState } from "react";

export const ToDoDate = () => {
    const [dateTime, setDateTime] = useState("")

    //* date and Time logic  , We need a STATE For constantly changing date and time dont forgot it
    useEffect(() => {
        const internval = setInterval(() => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
            });
            setDateTime(`${formattedDate} - ${formattedTime}`)
        }, 1000)

        return () => clearInterval(internval);
    }, [])
    return (
        <h2 className="date-time">{dateTime}</h2>
    );
};