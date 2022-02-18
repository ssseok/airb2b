import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

Modal.setAppElement("#root");
const LoginModal = (props) => {
  const { _isOpen, _isClose } = props;
  const [isOpen, setIsopen] = React.useState(_isOpen);

  const isClose = () => {
    setIsopen(false);
    _isClose();
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
              로그인 또는 회원가입
            </header>
            <h1> 로그인</h1>
            <div> let's go</div>
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
export default LoginModal;
