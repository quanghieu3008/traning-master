import { useRef, useEffect } from 'react';
const useRender = () => {

    let counter = useRef(1);
    useEffect(() => {
        counter.current++;
    });
    return [{ counter: counter.current }]
}
export default useRender