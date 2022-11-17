import React, {useMemo, useState} from "react";

function generateData() {
    //difficult counting
    console.log('generateData')
    return 32645986323
}

export const ExampleUseState = () => {
    console.log('ExampleUseState');

    //   const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData);

    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}