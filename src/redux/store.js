import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import inputReducer from './../inputReducer'

const reducers = {
  form: formReducer,
  todoList: inputReducer  
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)

export default store;