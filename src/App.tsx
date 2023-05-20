import React from 'react' ;
import './App.css';
import Ex from "./example/example";
import Accordion from "./accordion/accordion";

function App() {
    return (
        <div className="App">
            Hello, samurai! Let's go!
            <Ex/>
            <Accordion title={'Menu'} collapted={true}/>
            <Accordion title={'Users'} collapted={false}/>
        </div>
    );
}

export default App;
