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

const getListDB = (listId) => {
  return function (dispatch, getState, { history }) {
    apis
      .getlist(listId)
      .then((res) => {
        dispatch(getList(res.data.locationPlaces));
      })
      .catch((err) => {
        console.log("nooo");
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
