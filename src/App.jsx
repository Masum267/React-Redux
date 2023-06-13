import { connect } from "react-redux";
import "./App.css"
import Counter from "./hoc/index";

function App(props) {
	return(
    <>
      <div>
        <h2>Count: {props.count.count}</h2>
        <button onClick={()=>props.increment()}>Increment</button><br/><br/>
        <button onClick={()=>props.decrement()}>Deccrement </button>
      </div>
    </>
  )
}
export default Counter(App);
