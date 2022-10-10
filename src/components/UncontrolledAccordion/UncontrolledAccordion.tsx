import React, {useReducer, useState} from "react";
import {reduser, TOGGLE_COLLAPSED} from "./reduser";


type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

    /*let [collapsed, setCollapsed] = useState(false);*/
    let [state, dispatch] = useReducer(reduser, {collapsed: false});

    return <div>
        <AccordionTitle title={props.titleValue} onClick={() => {
            dispatch({type: TOGGLE_COLLAPSED})
        }}/>
        {!state.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={() => props.onClick()}>--{props.title}--</h3>
}

function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default UncontrolledAccordion;