import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { appReducer } from './reducers/appReducer';
const rootReducer = combineReducers({
    app: appReducer,
});

//!Just store and add redux-devtools extencion
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
export default store;
