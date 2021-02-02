import './App.css';
import React, { useState } from 'react';
import ShowInput from './components/ShowInput';
import useRender from './hooks.js/useRender';

function App() {
    const [numbers, setNumBer] = useState(0)
    const [{ counter }] = useRender();
    console.log("App");
    console.log("Số lần render:", counter);
    return (
        <div style={{ display: 'flex', flexDirection: 'center', justifyContent: 'center', margin: "100px" }}>
            {numbers}
            <ShowInput
                setNumBer={setNumBer}
                numbers={numbers}
            />
            <div>  Số lần render:{counter}</div>
        </div>
    );
}

export default App;