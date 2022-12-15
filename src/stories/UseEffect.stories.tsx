import React, {useEffect, useState} from 'react';
import {Clock} from "../components/Clock/Clock";

export default {
    title: 'UseEffect',

};

export const ExampleUseEffect = () => {
    console.log('ExampleUseEffect');

    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        console.log('useEffect every render');
        document.title = counter.toString();
        //api.getUsers().then('') - запросы на сервер
        //setInterval
        //indexedDB
        //document.getElementId - обращение к DOM напрямую
        //document.title = "User " - изменение что-либо в DOM напрямую
    })

    useEffect(() => {
        console.log('useEffect only first render (analogue componentDidMount)');
        document.title = counter.toString();
        //api.getUsers().then('') - запросы на сервер
        //setInterval
        //indexedDB
        //document.getElementId - обращение к DOM напрямую
        //document.title = "User " - изменение что-либо в DOM напрямую
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter change');
        document.title = counter.toString();
        //api.getUsers().then('') - запросы на сервер
        //setInterval
        //indexedDB
        //document.getElementId - обращение к DOM напрямую
        //document.title = "User " - изменение что-либо в DOM напрямую
    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}

export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample');

    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    useEffect(() => {

        setTimeout(() => {
            console.log('setTimeout');
            document.title = counter.toString();
        }, 1000)
    }, [counter])


    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}

export const SetIntervalExample = () => {
    console.log('SetIntervalExample');

    const [counter, setCounter] = useState(1);

    useEffect(() => {

        const intervalId = setInterval(() => {
            setCounter(state => state + 1)
            console.log(counter)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])


    return <>
        Hello, counter: {counter}
    </>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log("Component rendered");

    useEffect(() => {
        console.log("Effect occurred" + counter)

        return () => {
            console.log("RESET EFFECT")
        }
    }, [counter])

    const increase = () => {
        setCounter(counter + 1)
    }

    return <>
        Hello, counter: {counter}
        <button onClick={increase}>+</button>
    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    console.log('Component rendered with ' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        };

        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler) //для зачистки события передаем ту же самую функцию, что и в addEventListener
        }
    }, [text])

    return <>
        Typed text: {text}
    </>
}

export const SetTimeoutExample2 = () => {
    const [text, setText] = useState('')

    console.log('Component rendered with ' + text)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log('TIMEOUT EXPIRED')
            setText('3 seconds passed')
        }, 3000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [text])

    return <>
        text: {text}
    </>
}
