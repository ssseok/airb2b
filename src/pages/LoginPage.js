import React from "react";
import { Text } from "../common";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const LoginPage = (props) => {
  const dispatch = useDispatch;

  const [email, setEmail] = React.useState("");
  const [passWord, setPassWord] = React.useState("");

  const changeId = (e) => {
    setEmail(e.target.value);
  };

  const changePw = (e) => {
    setPassWord(e.target.value);
  };

  const login = () => {
    dispatch(userActions.loginDB(email, passWord));
  };
  return (
    <LoginPageBlock>
      <Agrid>
        <Cgrid>
          <Xbtn>X</Xbtn>
          <Text margin="10px auto" size="16px" bold="600">
            로그인
          </Text>
        </Cgrid>
        <Line />
        <Agrid>
          <Text bold="600" size="22px">
            에어비엔비에 오신 것을 환영합니다.
          </Text>
          <Ainput
            type="text"
            placeholder="이메일을 입력하세요."
            value={email}
            onChange={changeId}
          />
          <Ainput
            type="password"
            placeholder="비밀번호를 입력하세요."
            value={passWord}
            onChange={changePw}
          />
          <Abutton onClick={login}>로그인</Abutton>
        </Agrid>
      </Agrid>
    </LoginPageBlock>
  );
};

const LoginPageBlock = styled.div``;
const Ainput = styled.input`
  width: 100%;
  height: 56px;
  border: 0.8px solid #cccccc;
  border-radius: 13px;
  padding: 0px 10px;
  margin: 15px 0px;
  &::placeholder {
    font-size: 14px;
  }
`;
const Agrid = styled.div`
  height: auto;
`;
const Abutton = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 13px;
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  margin-top: 20px;
  background: #ad305a; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #e84a5f,
    #ad305a
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #e84a5f,
    #ad305a
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  cursor: pointer;
`;

const Xbtn = styled.button`
  position: absolute;
  top: 4px;
  width: 35px;
  height: 35px;
  border-radius: 35px;
  border: none;
  cursor: pointer;
  background-color: #ffffff;
  &:hover {
    background-color: #eeeeee;
  }
`;

const Line = styled.hr`
  margin: 20px 0px;
  border: none;
  border-top: 1px solid #b8b8b8;
`;
const Cgrid = styled.div`
  text-align: center;
  display: flex;
  position: relative;
`;

export default LoginPage;
