import { createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from "../reducers/rootReducer";
import thunk from "../thunks/thunk";

const configureStore = (initialValues) => {
  return createStore(
    rootReducer,
    initialValues,
    composeWithDevTools(thunk),
  )
};

export default configureStore;