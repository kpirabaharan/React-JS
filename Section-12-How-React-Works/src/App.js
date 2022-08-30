import React, {useState} from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";

function App() {
    const [showParagraph, setShowParagraph] = useState(false);

    console.log('App Running')

    const toggleParagraphHandler = () => {
        setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }

    return (<div className="app">
            <h1>Hi there!</h1>
            <Button onClick={toggleParagraphHandler}>Show Paragraph!</Button>
            {showParagraph && <p>This is new!</p>}
        </div>);
}

export default App;
