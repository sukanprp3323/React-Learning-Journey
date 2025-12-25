import { useState } from "react";
import "./ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io";
import { BsDisplay } from "react-icons/bs";

export const ToggleSwitch = () => {

    const [isOn, setIsOn] = useState(false)

    const handleToggleSwitch = () => {
        setIsOn(!isOn)
    }

    const checkIsOn = isOn ? "on" : "off"
    const toggleBgColor = { backgroundColor: isOn ? "#4caf50" : "#f44336" }

    const iconColour = { color: isOn ? "#4caf50" : "#f44336" }
    return (<>


        <h1
            style={{ color: "darkblue" }}>
            Toggle Switch
            <IoIosSwitch style={iconColour} />
             <BsDisplay style={iconColour}/>   
        </h1>
        <div
            className="toggle-switch"
            style={toggleBgColor}
            onClick={handleToggleSwitch}>

            <div className={`switch ${checkIsOn}`}>
                <span className="switch-state">{checkIsOn}</span>
            </div>
        </div>
    </>)
}