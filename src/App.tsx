import React, {useState} from 'react';
import './App.css';
import {RatingValueType} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {GetValueOfUncontrolledInput, UncontrolledInput} from "./components/UncontrolledInputs/UncontrolledInput";
import {ControlledCheckbox, ControlledInputs, ControlledSelect} from "./components/ControlledInputs/ControlledInputs";
import {Select} from "./components/Select/Select";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Example1} from "./components/ReactMemo/ReactMemo";
import {Example2} from "./components/UseMemo/UseMemo";

function App() {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false);
    let [value, setValue] = useState(null);

    return (
        <div className={'App'}>

            {/*            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed}
                       onChange={() => setAccordionCollapsed(!accordionCollapsed)}
                       items={[{title: 'Dimych', value: 1}, {title: 'Valera', value: 2}, {
                           title: 'Artem',
                           value: 3
                       }, {title: 'Viktor', value: 4}]}
                       onClick={(value) => alert(`item ${value} was clicked`)}
            />*/}

            {/*<UncontrolledOnOff/>*/}
            {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}

            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}

            <UncontrolledInput/>
            <GetValueOfUncontrolledInput/>
            <br/>
            <br/>
            <br/>
            <ControlledInputs/>
            <ControlledCheckbox/>
            <ControlledSelect/>
            <br/>
            <br/>
            <br/>
            <Select items={[{title: 'Dimych', value: "1"}, {title: 'Valera', value: "2"}, {
                title: 'Artem',
                value: "3"
            }, {title: 'Viktor', value: "s"}]} onChange={setValue} value={value}/>


            {/*            <Rating value={ratingValue} onClick={setRatingValue}/>

            <UncontrolledRating />
                        <OnOff/>*/}

            <UncontrolledAccordion titleValue={"Menu"}/>

            {/*         <UncontrolledRating />*/}


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

            <Example1/>
            <br/>
            <br/>
            <br/>
            <Example2/>

        </div>
    );
}

/*type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title} </h1>
}*/


export default App;

//test comment for storybook lesson