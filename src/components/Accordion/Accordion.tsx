import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionSecret(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return <div>
        <AccordionTitle title={props.titleValue} onChange={props.onChange}
        />
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
}

const Accordion = React.memo(AccordionSecret);

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitleSecret(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={props.onChange}>--{props.title}--</h3>
}

const AccordionTitle = React.memo(AccordionTitleSecret);

type AccordionBodyType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBodySecret(props: AccordionBodyType) {
    console.log("AccordionBody rendering")
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => props.onClick(i.value)} key={index}>{i.title}</li>)}
        </ul>
    );
}

const AccordionBody = React.memo(AccordionBodySecret);

export default Accordion;