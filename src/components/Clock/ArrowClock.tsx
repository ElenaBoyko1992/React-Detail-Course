import React, {useEffect, useState} from "react";
import arrow from './arrow.png'
import s from './ArrowClock.module.css'


export const ArrowClock = () => {

    const [date, setDate] = useState(new Date());

    let seconds = date.getSeconds() * 6 //6 потому что смещаем на 6 градусов в секунду (360 град / 60 сек)
    let minutes = date.getMinutes() * 6

    let [secArrow, setSecArrow] = useState(<img className={s.sec} src={arrow} alt=""
                                                style={{transform: `rotate(${seconds}deg)`}}/>)
    let [minArrow, setMinArrow] = useState(<img className={s.min} src={arrow} alt=""
                                                style={{
                                                    transform: `rotate(${minutes}deg)`,
                                                    transformOrigin: 'bottom'
                                                }}/>)

    useEffect(() => {

        const intervalId = setInterval(() => {
            setSecArrow(<img className={s.sec} src={arrow} alt="" style={{transform: `rotate(${seconds}deg)`}}/>)
            seconds += 6

            setMinArrow(<img className={`${s.sec} ${s.min}`} src={arrow} alt=""
                             style={{transform: `rotate(${minutes}deg)`}}/>)
            minutes += 0.1
        }, 1000)

        //2-й вариант - минутная стрелка отдельным таймером
        /*        const intervalId2 = setInterval(() => {
                    setMinArrow(<img className={`${s.sec} ${s.min}`} src={arrow} alt=""
                                     style={{transform: `rotate(${minInitial}deg)`}}/>)
                    minInitial += 6
                }, 60000)*/

        return () => {
            clearInterval(intervalId)
            // clearInterval(intervalId2)
        }
    }, [])


    return <>

        <div className={s.clock}>
            {secArrow}
            {minArrow}
        </div>
    </>
}
