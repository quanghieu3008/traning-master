import { useRef } from 'react';
const useRender = () => {
    let counter = useRef(0);
    counter.current++;
    return [{ counter: counter.current }]
}
export default useRender