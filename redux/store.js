import { createStore } from 'redux'
import reducer from './reducers/index';

export default function configureStore(initilaState) {
    const store = createStore(reducer, initilaState)
    return store;
}