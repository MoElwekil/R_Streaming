import _ from "lodash";
import {
  STREAM_CREATE,
  STREAM_EDIT,
  STREAMS_LIST,
  STREAM_DELETE,
  STREAM_SHOW,
} from "../actions/types";
const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case STREAM_SHOW:
      return { ...state, [action.payload.id]: action.payload };
    case STREAM_CREATE:
      return { ...state, [action.payload.id]: action.payload };
    case STREAM_EDIT:
      return { ...state, [action.payload.id]: action.payload };
    case STREAMS_LIST:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case STREAM_DELETE:
      return _.omit(state, action.payload);

    default:
      return state;
  }
};

export default streamReducer;
