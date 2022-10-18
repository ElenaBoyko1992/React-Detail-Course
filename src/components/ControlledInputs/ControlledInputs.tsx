import React from "react";
import {ChangeEvent, useState} from "react";

const ControlledInputsSecret = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <div>
            <input value={value} onChange={onChangeHandler}/>
            {value}
        </div>

    )
}

export const ControlledInputs = React.memo(ControlledInputsSecret)

const ControlledCheckboxSecret = () => {
    const [value, setValue] = useState(true)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }

    return (
        <div>
            <input type={"checkbox"} checked={value} onChange={onChangeHandler}/>
        </div>

    )
}

export const ControlledCheckbox = React.memo(ControlledCheckboxSecret);

const ControlledSelectSecret = () => {
    const [value, setValue] = useState<string | undefined>(undefined)
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <div>
            <select value={value} onChange={onChangeHandler}>
                <option>none</option>
                <option value="1">New York</option>
                <option value="2">Miami</option>
                <option value="3">Los Angeles</option>
            </select>
        </div>

    )
}

export const ControlledSelect = React.memo(ControlledSelectSecret)

