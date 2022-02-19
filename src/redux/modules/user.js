import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { apis } from "../../shared/api";

const LOG_IN = "LOG_IN";
const SET_USER = "SET_USER";

const setUser = createAction(SET_USER, (user) => ({ user }));
const logIn = createAction(LOG_IN, (user) => ({ user }));

const initialState = {
  userEmail: null,
  userNickname: null,
  password: null,
  passwordConfirm: null,
  is_login: false,
};

const logInDB = (userEmail, password) => {
  return function (dispatch, getState, { history }) {
    apis
      .login(userEmail, password)
      .then((res) => {
        dispatch(logIn(userEmail, password));
        history.replace("/");
      })
      .catch((err) => {
        alert(err.response);
        console.log(err.response);
      });
  };
};

const signUpDB = (userEmail, userNickname, password, passwordConfirm) => {
  return function (dispatch, getState, { history }) {
    apis
      .signup(userEmail, userNickname, password, passwordConfirm)
      .then((res) => {
        dispatch(setUser(userEmail, userNickname, password, passwordConfirm));
        window.alert("회원가입이 완료되었습니다!");
        history.replace("/");
      })
      .catch((err) => {
        alert(err.response);
        console.log(err.response);
      });
  };
};

export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [SET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  logIn,
  setUser,
  signUpDB,
  logInDB,
};

export { actionCreators };
