import  { useState } from 'react';

const UpdatedComponent=(OriginalComponent)=>{
    const Counter=()=>{
        const [count, setCount] = useState({
            count:5
        });
        //console.log(props)

        const increment = () => {
            setCount((state) => {
                return {
                    ...state,
                    count: state.count + 1,
                };
            });
        };

        const decrement = () => {
            setCount((state) => {
                return {
                    ...state,
                    count: state.count - 1,
                };
            });
        };
        return (
            <OriginalComponent
                count={count}
                increment={increment}
                decrement={decrement}
            />
        );
    }
    return Counter
}
export default UpdatedComponent