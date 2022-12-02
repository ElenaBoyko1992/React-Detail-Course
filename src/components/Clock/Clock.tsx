import React, {useEffect, useState} from "react";
import arrow from './arrow.png'
import s from './ArrowClock.module.css'

export function get2DigitsString(number: number) {
    return number < 10 ? '0' + number : number
}

export const Clock = () => {
    console.log('SetIntervalExample');

    const [date, setDate] = useState(new Date());

    const hours = get2DigitsString(date.getHours())
    const minutes = get2DigitsString(date.getMinutes())
    const seconds = get2DigitsString(date.getSeconds())
    const time = `${hours}:${minutes}:${seconds}`

    useEffect(() => {

        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])


    return <>
        {time}

    </>
}
