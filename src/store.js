import { createStore, applyMiddleware } from 'redux'
import { wordReducer } from './wordReducer'
import thunk from 'redux-thunk'

export const store = createStore(wordReducer, applyMiddleware(thunk))