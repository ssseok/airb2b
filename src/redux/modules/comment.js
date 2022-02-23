import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { Axios } from "axios";
import { instance } from "../../shared/TEST.JS";
import { apis } from "../../shared/api";

const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

const LOADING = "LOADING";

const setComment = createAction(SET_COMMENT, (post_id, comment_list) => ({
  post_id,
  comment_list,
}));
const addComment = createAction(
  ADD_COMMENT,
  (userNickname, commentContent) => ({
    userNickname,
    commentContent,
  })
);

const delComment = createAction(DELETE_COMMENT, (commentId) => ({ commentId }));

const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState = {
  list: {},
  is_loading: false,
};

const getCommentDB = (post_id) => {
  return function (dispatch, getState, { history }) {};
};

const addCommentDB = (userNickname, commentContent) => {
  return function (dispatch, getState, { history }) {
    apis
      .addComment(userNickname, commentContent)
      .then((res) => {
        dispatch(addComment(res.data));
      })
      .catch((err) => {
        console.log("nonono");
        console.log(err);
      });
  };
};
export default handleActions(
  {
    [SET_COMMENT]: (state, action) => produce(state, (draft) => {}),
    [ADD_COMMENT]: (state, action) => produce(state, (draft) => {}),
    [LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading;
      }),
  },
  initialState
);

const actionCreators = {
  addCommentDB,
  getCommentDB,
  setComment,
  addComment,
};

export { actionCreators };
