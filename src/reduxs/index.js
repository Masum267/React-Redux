import {createStore} from 'redux'
import counterReducer from './reduxs/counter/reducer'

const store = createStore(counterReducer);

export default store;