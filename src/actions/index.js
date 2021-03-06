import stream from "../apis/stream";
import history from "../history";

import {
  SIGN_IN,
  SIGN_OUT,
  STREAMS_LIST,
  STREAM_CREATE,
  STREAM_DELETE,
  STREAM_EDIT,
  STREAM_SHOW,
} from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().googleAuth;
  const response = await stream.post("/stream", { ...formValues, userId });

  dispatch({ type: STREAM_CREATE, payload: response.data });

  history.push("/");
};

export const streamEdit = (id, formValues) => async (dispatch) => {
  const response = await stream.patch(`/stream/${id}`, formValues);

  dispatch({ type: STREAM_EDIT, payload: response.data });

  history.push("/");
};

export const streamDelete = (id) => async (dispatch) => {
  await stream.delete(`/stream/${id}`);

  dispatch({ type: STREAM_DELETE, payload: id });

  history.push("/");
};

export const streamsList = () => async (dispatch) => {
  const response = await stream.get("/stream");

  dispatch({ type: STREAMS_LIST, payload: response.data });
};

export const streamShow = (id) => async (dispatch) => {
  const response = await stream.get(`/stream/${id}`);

  dispatch({ type: STREAM_SHOW, payload: response.data });
};
