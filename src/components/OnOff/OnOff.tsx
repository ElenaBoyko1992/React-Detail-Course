import React from "react";
import s from './OnOff.module.css'


type OnOffPropsType = {
    value: boolean
}

export function OnOff(props: OnOffPropsType) {

    return (
        <div>
            <button>On</button>
            <button>Off</button>
        </div>
    );
};

