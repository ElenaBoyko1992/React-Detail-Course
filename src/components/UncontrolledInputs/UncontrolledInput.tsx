import React, {ChangeEvent, useRef, useState} from "react";

const UncontrolledInputSecret = () => { //неконтролируемый инпут с пом. локального стейта
    const [value, setValue] = useState('');
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <div>
            <input onChange={onChangeHandler}/>{value}
        </div>
    )
};

export const UncontrolledInput = React.memo(UncontrolledInputSecret)

const GetValueOfUncontrolledInputSecret = () => { //неконтролируемый инпут с пом. рефов
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null)

    const onClickHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={onClickHandler}>get value</button>
            {value}
        </div>
    )
};

export const GetValueOfUncontrolledInput = React.memo(GetValueOfUncontrolledInputSecret);