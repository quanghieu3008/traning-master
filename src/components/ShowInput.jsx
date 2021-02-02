import React, { useRef, useState } from 'react';
function ShowInput(props) {
    const { handleOnChangeInput, handleOnChange } = props
    console.log("Button");
    let counter = useRef(0);
    //  let [myState, setMyState] = useState("A");
    // let couter1 = 0;
    let updateState = () => {
        counter.current++;
        console.log("counter: " + counter.current);
        // couter1++;
        // setMyState(myState + "-u-");
        // console.log("counter: " + counter.current);
        // console.log(couter1, "c1");
    }
    return (
        <div >
            <button onClick={handleOnChange}>Trừ</button>
            <button onClick={handleOnChangeInput} >cong </button>

        </div>
    );
}

export default ShowInput;
   // <div>
//     <div>MyState : {myState}</div>
//     <input type="button" onClick={() => updateState()} value="Update State"></input>

// </div>