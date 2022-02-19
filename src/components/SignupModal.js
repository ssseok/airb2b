import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

import { PaddingBox, Text, Span } from "../common";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

Modal.setAppElement("#root");
const SignupModal = (props) => {
  const { _isOpen, _isClose } = props;
  const [isOpen, setIsopen] = React.useState(_isOpen);

  const isClose = () => {
    setIsopen(false);
    _isClose();
  };
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState("");
  const [nickName, setNickName] = React.useState("");
  const [passWord, setPassWord] = React.useState("");
  const [passWordConfirm, setPassWordConfrim] = React.useState("");

  // 에러 메세지 상태 저장
  const [emailMessage, setEmailMessage] = React.useState("");
  const [nickNameMessage, setNickNameMessage] = React.useState("");
  const [passWordMessage, setPassWordMessage] = React.useState("");
  const [passWordConfirmMessage, setPassWordConfrimMessage] =
    React.useState("");

  // 중복 체크
  const [overlap, setOverlap] = React.useState(false);
  const [emailCurrent, setEmailCurrent] = React.useState("");
  const [passWordCurrent, setPassWordCurrent] = React.useState("");

  // 유효성 검사
  const [isEmail, setIsEmail] = React.useState("");
  const [isPwd, setIsPwd] = React.useState("");
  const [isPwdCheck, setIsPwdCheck] = React.useState("");

  const is_Email = (e) => {
    setEmail(e.target.value);
    const regId =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const emailCurrent = e.target.value;
    setEmailCurrent(emailCurrent);

    if (!regId.test(emailCurrent)) {
      setEmailMessage("이메일 형식에 맞게 만들어주세요!");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 이메일 형식입니다!");
      setIsEmail(true);
    }
  };

  const is_NickName = (e) => {
    setNickName(e.target.value);
  };

  const is_PassWord = (e) => {
    setPassWord(e.target.value);
    const regPwd = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;
    const passWordCurrent = e.target.value;

    setPassWordCurrent(passWordCurrent);

    if (!regPwd.test(passWordCurrent)) {
      setPassWordMessage("영문, 숫자를 조합하여 8~16자로 만들어주세요!");
      setIsPwd(false);
    } else {
      setPassWordMessage("올바른 비밀번호 형식입니다!");
      setIsPwd(true);
    }
  };

  const is_PassWordConfirm = (e) => {
    setPassWordConfrim(e.target.value);
    const regPwd = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/;
    const SamePwdCurrent = e.target.value;

    if (!regPwd.test(SamePwdCurrent)) {
      setPassWordConfrimMessage("형식에 맞지 않는 비밀번호입니다!");
      setIsPwdCheck(false);
    } else if (
      passWord !== "" &&
      passWordConfirm !== "" &&
      passWord === SamePwdCurrent
    ) {
      setPassWordConfrimMessage("비밀번호가 같습니다!");
      setIsPwdCheck(true);
    } else {
      setPassWordConfrimMessage("비밀번호가 틀립니다.. 다시 확인 해주세요!");
      setIsPwdCheck(false);
    }
  };

  const signUp = () => {
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
          }}
        >
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
                      onChange={is_Email}
                    />
                    {email.length > 0 && (
                      <>
                        <br />
                        <Span
                          size="3px"
                          className={`${isEmail ? "success" : "error"}`}
                        >
                          {emailMessage}
                        </Span>
                      </>
                    )}
                    <br />
                    <MainInput
                      placeholder="닉네임을 입력하세요."
                      type="text"
                      value={nickName}
                      onChange={is_NickName}
                    />
                    <MainInput
                      placeholder="비밀번호를 입력하세요."
                      type="password"
                      value={passWord}
                      onChange={is_PassWord}
                    />
                    {passWord.length > 0 && (
                      <>
                        <br />
                        <Span
                          size="3px"
                          className={`${isPwd ? "success" : "error"}`}
                        >
                          {passWordMessage}
                        </Span>
                      </>
                    )}
                    <br />
                    <MainInput
                      placeholder="비밀번호를 다시 입력하세요."
                      type="password"
                      value={passWordConfirm}
                      onChange={is_PassWordConfirm}
                    />
                    {passWordConfirm.length > 0 && (
                      <>
                        <br />
                        <Span
                          size="3px"
                          className={`${isPwdCheck ? "success" : "error"}`}
                        >
                          {passWordConfirmMessage}
                        </Span>
                      </>
                    )}
                    <br />
                    <MainBtn onClick={signUp}>회원가입하기</MainBtn>
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

export default SignupModal;
