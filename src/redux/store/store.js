import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";

const configureStore = (initialValues) => {
  return createStore(
    rootReducer,
    initialValues,
    composeWithDevTools(applyMiddleware(thunk)),
  )
};

export default configureStore;