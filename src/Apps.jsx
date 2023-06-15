import "./App.css";
import {connect} from "react-redux";
import { increment , decrement } from "./redux/counter/action";
import { useState } from "react";

function Apps (props){

    const [value,setValue] = useState();

    const handleChange = (e) =>{
        console.log(typeof e.target.value)

        setValue(e.target.value);
    };
    console.log(value);

    return (
        <>
            <div>
                <h1>
                    Counter: {props.counter}
                </h1>
                <br />
                <br />

                <input
                className="h-11 w-32 text-xl pl-4"
                 type="number" 
                 onChange={handleChange} 
                 /><br /><br />
                <button onClick={() => props.increment(parseInt(value))}>
                    Increment
                </button><br /><br />
                <button onClick={()=> props.decrement(parseInt(value))}>
                    Decrement
                </button>
            </div>
        </>
    )
}

const mapStateToProps = (state) =>{
    return {
        counter: state.counter,
    }
}

const mapDishpatchToProps = (dispatch) =>{
    return{
        increment: (value) => dispatch(increment(value)),
        decrement: (value) => dispatch(decrement(value)),
    }
}

export default connect (mapStateToProps,mapDishpatchToProps)(Apps);
