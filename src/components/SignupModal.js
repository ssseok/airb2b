import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

import { PaddingBox, Text } from "../common";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

Modal.setAppElement("#root");
const SignupModal = (props) => {
  const { _isOpen, _isClose } = props;
  const [isOpen, setIsopen] = React.useState(_isOpen);

  const isClose = () => {
    setIsopen(false);
    _isClose();
  };
  const { history } = props;
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState("");
  const [nickName, setNickName] = React.useState("");
  const [passWord, setPassWord] = React.useState("");
  const [passWordConfirm, setPassWordConfrim] = React.useState("");

  const emailCheck = (e) => {
    setEmail(e.target.value);
  };

  const nickNameCheck = (e) => {
    setNickName(e.target.value);
  };

  const passWordCheck = (e) => {
    setPassWord(e.target.value);
  };

  const passWordConfirmCheck = (e) => {
    setPassWordConfrim(e.target.value);
  };

  const signUpCheck = () => {
    dispatch(userActions.signUpDB(email, nickName, passWord, passWordConfirm));
  };

  return (
    <>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onRequestClose={isClose}
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            },
            content: {
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "500px",
              height: "80vh",
              padding: "0",
              border: "solid 1px #eee",
              overflow: "auto",
              background: "#fff",
              borderRadius: "20px",
              transform: "translate(-50%,-50%)",
              WebkitOverflowScrolling: "touch",
              outline: "none",
            },
          }}>
          <ModalWrap>
            <header>
              <button onClick={isClose}></button>
              회원가입
            </header>
            <React.Fragment>
              <AllWrap>
                <AllWrap>
                  <PaddingBox padding="16px">
                    <Text bold size="22px">
                      에어비앤비에 오신 것을 환영합니다.
                    </Text>
                    <MainInput
                      placeholder="이메일을 입력하세요."
                      type="text"
                      value={email}
                      onChange={emailCheck}
                    />
                    <MainInput
                      placeholder="닉네임을 입력하세요."
                      type="text"
                      value={nickName}
                      onChange={nickNameCheck}
                    />
                    <MainInput
                      placeholder="비밀번호를 입력하세요."
                      type="text"
                      value={passWord}
                      onChange={passWordCheck}
                    />
                    <MainInput
                      placeholder="비밀번호를 다시 입력하세요."
                      type="text"
                      value={passWordConfirm}
                      onChange={passWordConfirmCheck}
                    />
                    <MainBtn onClick={signUpCheck}>회원가입하기</MainBtn>
                  </PaddingBox>
                </AllWrap>
              </AllWrap>
            </React.Fragment>
          </ModalWrap>
        </Modal>
      )}
    </>
  );
};

const ModalWrap = styled.div`
  header {
    position: relative;
    text-align: center;
    line-height: 68px;
    border-bottom: solid 1px #eee;
    padding-left: 10px;

    button {
      position: absolute;
      top: 50%;
      left: 20px;
      width: 12px;
      height: 12px;
      transform: translate(0, -50%);
      background: url(/img/cancel.png) no-repeat center / cover;
    }
  }
`;

const AllWrap = styled.div`
  height: auto;
`;

const Cwrap = styled.div`
  text-align: center;
  display: flex;
  position: relative;
`;

const Line = styled.hr`
  margin: 20px 0px;
  border: none;
  border-top: 1px solid #ebebeb;
`;

const MainInput = styled.input`
  width: 100%;
  height: 56px;
  border: 1px solid #cccccc;
  border-radius: 13px;
  padding: 0px 10px;
  margin: 15px 0px;
  &::placeholder {
    font-size: 14px;
  }
`;

const MainBtn = styled.button`
  width: 100%;
  height: 56px;
  border: none;
  border-radius: 13px;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  background: #ad305a;
  background: -webkit-linear-gradient(to right, #e84a5f, #ad305a);
  background: linear-gradient(to right, #e84a5f, #ad305a);
  cursor: pointer;
`;

const Xbtn = styled.button`
  position: absolute;
  top: 4px;
  width: 35px;
  height: 35px;
  border-radiuse: 35px;
  border: none;
  cursor: pointer;
  background-color: #ffffff;
  &:hover {
    background-color: #eeeeee;
  }
`;

export default SignupModal;
