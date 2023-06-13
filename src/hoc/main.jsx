import { useState } from "react";

const UpdatedComponent = (OriginalComponent)=>{
    const Counter=()=>{
        const [count,setCount] = useState(10);


        const increment = () =>{
            setCount(count+1);
        };

        const decrement = () =>{
            setCount(count-1);
        };

        return(
            <OriginalComponent
            count={count}
            increment={increment}
            decrement={decrement}
            />
        );
    }

    return Counter;
}

export default UpdatedComponent;