import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";

import googleAuthReducer from "./googleAuthReducer";
import streamReducer from "./streamReducer";

export default combineReducers({
  googleAuth: googleAuthReducer,
  form: reduxForm,
  stream: streamReducer,
});
