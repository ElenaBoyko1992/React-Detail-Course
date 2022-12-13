import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type ClockType = {
    mode?: 'digital' | 'analog'
}

export function get2DigitsString(number: number) {
    return number < 10 ? '0' + number : number
}

export const Clock = (props: ClockType) => {
    console.log('SetIntervalExample');

    const [date, setDate] = useState(new Date());

    useEffect(() => {

        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    let view;

    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break;
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }

    return <div>
        {view}
    </div>
}

export type ClockViewPropsType = {
    date: Date
}
