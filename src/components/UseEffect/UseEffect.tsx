import React, {useEffect, useMemo, useState} from "react";

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

        setInterval(() => {
            setCounter(state => state + 1)
            console.log(counter)
        }, 1000)
    }, [])


    return <>
        Hello, counter: {counter}
    </>
}