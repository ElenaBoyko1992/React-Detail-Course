import React from 'react';
import logo from './logo.svg';
import './App.css';

function hello() {
    debugger
    alert('Hello IT-KAMASUTRA')
}
//hello();

function App() {
    console.log("App rendering")
    return (
        <div>
            <AppTitle />
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function AppTitle() {
    console.log("AppTitle rendering")
    return <>This is APP component</>
}

function Rating() {
    console.log("Rating rendering")
    return (
        < >
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    );
}

function Star() {
    console.log("Star rendering")
    return (
        <div>star</div>
    );
}

function Accordion() {
    console.log("Accordion rendering")
    return <div>
        <AccordionTitle />
        <AccordionBody />
    </div>
}

function AccordionTitle() {
    console.log("AccordionTitle rendering")
    return <h3>Меню</h3>
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

export default App;
