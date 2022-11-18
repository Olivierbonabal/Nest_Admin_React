import { setUserReducer } from "./reducers/setUserReducer";
import {legacy_createStore as createStore} from 'redux';

export const configureStore = () => {
    return createStore(setUserReducer);
}

