import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

import { rootReducer, State } from "../reducers";
import { Action } from "../actions";

const store = createStore<State, Action, any, any>(rootReducer, composeWithDevTools(
    applyMiddleware(logger)
));

export default store;