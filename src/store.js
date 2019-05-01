import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from "redux-promise-middleware"
import budgetReducer from './ducks/budgetReducer'
import userReducer from './ducks/userReducer'


const rootreducer = combineReducers({
  budget: budgetReducer,
  user : userReducer
})
const store = createStore(rootreducer, applyMiddleware(promiseMiddleware))

export default store