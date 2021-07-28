import { SIGNIN, SIGNOUT } from "../actions/types";
const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
};
const googleAuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNIN:
      return { ...state, isSignedIn: true, userId: action.payload };

    case SIGNOUT:
      return { ...state, isSignedIn: false, userId: null };

    default:
      return state;
  }
};

export default googleAuthReducer;
