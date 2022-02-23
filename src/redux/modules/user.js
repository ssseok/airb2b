import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/api";
import axios from "axios";
import { history } from "../../App";

const LOG_IN = "LOG_IN";
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";

const setUser = createAction(SET_USER, (user) => ({ user }));
const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

const initialState = {
  userEmail: null,
  userNickname: null,
  password: null,
  passwordConfirm: null,
  is_login: false,
  list: [],
};

const logInDB = (userEmail, password) => {
  return function (dispatch, getState, { history }) {
    apis
      .login(userEmail, password)
      .then((res) => {
        console.log(res);
        if (!res.data.ok) {
          window.alert(res.data.errorMessage);
          return;
        }
        dispatch(logIn(res.data));
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userNickname", res.data.userNickname);
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
        // dispatch(setUser(userEmail, userNickname, password, passwordConfirm));
        const modal = getState().modal.is_open;
        console.log(modal);
        console.log(res.data.ok);
        if (!res.data.ok) {
          window.alert(res.data.errorMessage);
          return;
        }
        window.alert("회원가입이 완료되었습니다!");
        history.replace("/");
        console.log(res);
      })
      .catch((err) => {
        alert(err.response);
        console.log(err.response);
      });
  };
};

const logOutDB = () => {
  return function (dispatch, getState, { history }) {
    localStorage.removeItem("token");
    dispatch(logOut());
    history.replace("/");
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
      }),
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        localStorage.removeItem("token");
        draft.is_login = false;
      }),
  },
  initialState
);

const actionCreators = {
  logIn,
  logOut,
  setUser,
  signUpDB,
  logInDB,
  logOutDB,
};

export { actionCreators };
