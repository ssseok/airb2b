import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { Axios } from "axios";
import { instance } from "../../shared/TEST.JS";
import { apis } from "../../shared/api";

// const SET_COMMENT = "SET_COMMENT";
const GET_COMMENT = "GET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

const LOADING = "LOADING";

// const setComment = createAction(SET_COMMENT, (comments) => ({
//   comments,
// }));
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
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const addCommentDB = (userNickname, commentContent, placeId) => {
  return function (dispatch, getState, { history }) {
    apis
      .addComment(
        userNickname,
        commentContent,
        placeId
        //   {
        //   headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        // }
      )
      .then((res) => {
        console.log(res);
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
    // [SET_COMMENT]: (state, action) => produce(state, (draft) => {}),
    [GET_COMMENT]: (state, action) => produce(state, (draft) => {}),
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
  // setComment,
  getComment,
  addComment,
};

export { actionCreators };
