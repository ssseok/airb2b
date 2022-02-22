import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/api";
import axios from "axios";
import { history } from "../../App";

const GET_LIST = "GET_LIST";

const initialState = {
  list: [],
};

const getList = createAction(GET_LIST, (list) => ({ list }));

const getListDB = () => {
  return function (dispatch, getState, { history }) {
    apis
      .getlist()
      .then((res) => {
        console.log(res);
        dispatch(getList(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [GET_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.list;
      }),
  },
  initialState
);

const actionCreators = {
  getListDB,
};

export { actionCreators };
