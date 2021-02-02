import React from 'react';
function ShowInput(props) {
    const { setNumBer, numbers } = props
    console.log("Button");
    return (
        <div >
            <button onClick={() => setNumBer(numbers - 1)}>Trừ</button>
            <button onClick={() => setNumBer(numbers + 1)} >Cộng</button>
        </div>
    );
}

export default ShowInput;
