import React from 'react' ;
import './App.css';
import Ex from "./example/example";
import Accordion from "./accordion/accordion";
import {NewProps} from "./type-props";

function App() {
    return (
        <div className="App">
            Hello, samurai! Let's go!
            <Ex/>
            <Accordion title={'Menu'} collapted={true}/>
            <Accordion title={'Users'} collapted={false}/>
            <NewProps text={"Dasha"} num={2}/>
            <NewProps text={"Masha"} num={4}/>
            <NewProps text={"Alina"} num={21}/>
        </div>
    );
}

export default App;
