import "./App.css";
import { connect } from "react-redux";
import {increment , decrement} from "./redux/counter/action"

import { useState } from "react";


function App(props) {

	const [value, setValue] = useState();


	const handleChange = (e) => {
		

		setValue(e.target.value);
	};
	console.log(value);
	return (
		<>
			<div>
				<h1>Counter: {props.counter}</h1>
				<br />

				<input type="number" onChange={handleChange} />
				<br />
				<br />
				<button onClick={() => props.increment(Number(value))}>
					Increment
				</button>
				<button onClick={() => props.decrement(Number(value))}>
					Decrement
				</button>

				<br />
				<br />
				{/* <button onClick={() => props.increment()}>Increment</button>
				<button onClick={() => props.decrement()}>Decrement</button> */}
			</div>
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		counter: state.counter,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		increment: (value) => dispatch(increment(value)),
		decrement: (value) => dispatch(decrement(value)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);