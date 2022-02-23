import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { Axios } from "axios";
import { instance } from "../../shared/TEST.JS";
import { apis } from "../../shared/api";

const GET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

const LOADING = "LOADING";

const getComment = createAction(GET_COMMENT, (comments) => ({
  comments,
}));
const addComment = createAction(ADD_COMMENT, (comment_data) => ({
  comment_data,
}));

const delComment = createAction(DELETE_COMMENT, (commentId) => ({ commentId }));

const loading = createAction(LOADING, (is_loading) => ({ is_loading }));

const initialState = {
  list: [],
  is_loading: false,
};

const getCommentDB = (placeId) => {
  return function (dispatch, getState, { history }) {
    apis
      .getComment(placeId)
      .then((res) => {
        dispatch(getComment(res.data.comment));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const addCommentDB = (userNickname, commentContent, placeId) => {
  return function (dispatch, getState, { history }) {
    apis
      .addComment(userNickname, commentContent, placeId)
      .then((res) => {
        dispatch(
          addComment({
            userNickname,
            commentContent,
            commentId: res.data.commentId,
          })
        );
      })
      .catch((err) => {
        console.log("nonono");
        console.log(err);
      });
  };
};
export default handleActions(
  {
    [GET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.comments);
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.comment_data);
      }),
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
  getComment,
  addComment,
};

export { actionCreators };
