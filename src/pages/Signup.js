import React from "react";
import { PaddingBox, Text, Span } from "../common";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Signup = (props) => {
  const { history } = props;
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
      /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-z])*.([a-zA-Z])*/;
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
    <React.Fragment>
      <AllWrap>
        <PaddingBox padding="16px">
          <Cwrap>
            <Xbtn>X</Xbtn>
            <Text margin="10px auto" size="16px" bold>
              회원가입
            </Text>
          </Cwrap>
        </PaddingBox>
        <Line />
        <AllWrap>
          <PaddingBox padding="16px">
            <Text bold size="22px">
              에어비앤비에 오신 것을 환영합니다.
            </Text>
            <CheckInput
              placeholder="이메일을 입력하세요."
              type="text"
              value={email}
              onChange={is_Email}
            />
            {email.length > 0 && (
              <>
                <br />
                <Span size="3px" className={`${isEmail ? "success" : "error"}`}>
                  {emailMessage}
                </Span>
              </>
            )}
            <br />
            <CheckInput
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
                <Span size="3px" className={`${isPwd ? "success" : "error"}`}>
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
  );
};

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

const CheckInput = styled.input`
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

const CheckBtn = styled.button`
  width: 13%;
  height: 56px;
  border: none;
  border-radius: 13px;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0px 0px 17px;
  background: #ad305a;
  background: -webkit-linear-gradient(to right, #e84a5f, #ad305a);
  background: linear-gradient(to right, #e84a5f, #ad305a);
  cursor: pointer;
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

export default Signup;
