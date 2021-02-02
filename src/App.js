import './App.css';
import React from 'react';
import useNumber from './components/showNumber';
import ShowInput from './components/ShowInput';

function App() {
    const [number, handleOnChangeInput, handleOnChange, counter] = useNumber();
    console.log("App", counter);
    return (
        <div style={{ display: 'flex', flexDirection: 'center', justifyContent: 'center', margin: "100px" }}>
            {number && number}

            <ShowInput
                handleOnChangeInput={handleOnChangeInput}
                handleOnChange={handleOnChange}
            />
            <div>Số lần render là :{counter.counter}</div>
        </div>
    );
}

export default App;