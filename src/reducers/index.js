import { combineReducers } from "redux";
import {reducer as reduxForm} from 'redux-form'

import googleAuthReducer from "./googleAuthReducer";

export default combineReducers({
    googleAuth: googleAuthReducer,
    form: reduxForm
})