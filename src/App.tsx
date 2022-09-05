import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import OnOff from "./components/OnOff/OnOff";


function hello() {
    debugger
    alert('Hello IT-KAMASUTRA')
}

//hello();

function App(props: any) {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false);

    return (
        <div className={'App'}>

            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed}
                       onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>

            {/*<UncontrolledOnOff/>*/}
            {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}

            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}

            {/*

            <Rating value={ratingValue} onClick={setRatingValue}/>

            <UncontrolledRating />*/}
            {/*            <OnOff/>

            <UncontrolledAccordion titleValue={"Menu"}/>

            <UncontrolledRating />*/}


            {/*            <OnOff/>
            <OnOff/>

            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title} </h1>
}


export default App;
