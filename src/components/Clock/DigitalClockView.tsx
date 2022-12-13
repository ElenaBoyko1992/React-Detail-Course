import React from "react";
import {ClockViewPropsType, get2DigitsString} from "./Clock";




export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    const hours = get2DigitsString(date.getHours())
    const minutes = get2DigitsString(date.getMinutes())
    const seconds = get2DigitsString(date.getSeconds())
    const time = `${hours}:${minutes}:${seconds}`

    return <span>{time}</span>
}