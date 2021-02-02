import React, { useState, useRef, useEffect } from 'react';
function useNumber(props) {
    const [number, setNumBer] = useState(0)
    let counter = useRef(0);

    useEffect(() => {
        counter.current++;
    }, [number]);

    console.log(counter.current, "số lần render");
    const handleOnChangeInput = () => {
        setNumBer(number + 1)
    }

    const handleOnChange = () => {
        setNumBer(number - 1)
    }
    console.log("number");
    return [number, handleOnChangeInput, handleOnChange, { counter: counter.current }];
}

export default useNumber;