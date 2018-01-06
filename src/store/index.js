import {createStore, combineReducers} from 'redux'
import appReducer from './reducers/appReducer'

const reducers = combineReducers({
  app: appReducer,
  // todos: todosReducer
})

export const store = createStore(reducers)

