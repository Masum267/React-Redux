import './App.css';
import { connect } from 'react-redux';
import { increment,decrement } from './reduxs/counter/action';
import { useState } from 'react';

const Appps = (props)=>{
    const [value, setValue]= useState();
    

    const handleChange=(e)=>{
        console.log(typeof e.target.value)

        setValue(e.target.value)
    };
   // console.log(props);

    return(
        <>
            <div>
                <h1>Count : {props.counter}</h1>
                <br />
                <input type="number" 
                    onChange={handleChange}
                />
                <br />
                <br />
                <button onClick={()=> props.increment(parseInt(value))}>
                    Increments
                </button><br /><br />
                <button onClick={()=> props.decrement(parseInt(value))}>
                    Decrements
                </button>
            </div>
        </>
    )
}

const mapStateToProps =(state)=>{
    return{
        counter: state.counter
    }
}

const mapDishpatchToProps =(dispatch)=>{
    return{
        increment: (value) => dispatch (increment(value)),
        decrement: (value) => dispatch (decrement(value))
    }
}

export default connect(mapStateToProps,mapDishpatchToProps) (Appps)