import React, {useReducer, useState} from "react";
import {reduser, TOGGLE_COLLAPSED} from "./reduser";


type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

function UncontrolledAccordionSecret(props: AccordionPropsType) {
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

const UncontrolledAccordion = React.memo(UncontrolledAccordionSecret)

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitleSecret(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={() => props.onClick()}>--{props.title}--</h3>
}

const AccordionTitle = React.memo(AccordionTitleSecret)

function AccordionBodySecret() {
    console.log("AccordionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

const AccordionBody = React.memo(AccordionBodySecret)

export default UncontrolledAccordion;