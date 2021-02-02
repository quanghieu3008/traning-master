import './App.css';
import React, { useState } from 'react';
import ShowInput from './components/ShowInput';
import useRender from './hooks.js/useRender';

function App() {
    const [{ counter }] = useRender();
    const [numbers, setNumBer] = useState(0)

    console.log("App");
    console.log("button render lai {useref}}", counter);
    return (
        <div style={{ display: 'flex', flexDirection: 'center', justifyContent: 'center', margin: "100px" }}>
            {numbers}
            <ShowInput
                setNumBer={setNumBer}
                numbers={numbers}
            />
        </div>
    );
}

export default App;