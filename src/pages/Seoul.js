import React from "react";
import styled from "styled-components";

function Seoul() {
  return (
    <React.Fragment>
      <BtnPlace>
        <HeaderBtn>
          요금
          <img src="./img/airb2b1.png" alt="" />
        </HeaderBtn>
        <HeaderBtn style={{ width: "8.3em" }}>숙소 유형</HeaderBtn>
        <p style={{ fontSize: "18px", color: "#DDDDDD" }}>ㅣ</p>
        <HeaderBtn style={{ width: "10em" }}>취소 수수료 없음</HeaderBtn>
        <HeaderBtn style={{ width: "7.8em" }}>수변에 인접</HeaderBtn>
        <HeaderBtn style={{ width: "4.7em" }}>주방</HeaderBtn>
        <HeaderBtn style={{ width: "7.8em" }}>무선 인터넷</HeaderBtn>
        <HeaderBtn style={{ width: "5.5em" }}>선풍기</HeaderBtn>
        <HeaderBtn style={{ width: "5.5em" }}>에어컨</HeaderBtn>
        <HeaderBtn style={{ width: "9em" }}>무료 주차 공간</HeaderBtn>
        <HeaderBtn style={{ width: "7.8em" }}>셀프 체크인</HeaderBtn>
        <HeaderBtn style={{ width: "9em" }}>업무 전용 공간</HeaderBtn>
        <HeaderBtn style={{ width: "5.5em" }}>건조기</HeaderBtn>
        <HeaderBtn>
          필터
          <img
            style={{ width: "15px", height: "15px", marginTop: "-14px" }}
            src="./img/airb2b2.png"
            alt=""
          />
        </HeaderBtn>
      </BtnPlace>
    </React.Fragment>
  );
}

const BtnPlace = styled.div`
  width: 100vw;
  height: 12vh;
  display: flex;
  margin: auto;
  justify-content: space-evenly;
  align-items: center;
`;

const HeaderBtn = styled.button`
  cursor: pointer;
  text-align: center;
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  outline: none;
  margin: 0px;
  border-radius: 30px;
  color: rgb(34, 34, 34);
  position: relative;
  padding: 10px 16px;
  font-size: 14px;
  line-height: 16px;
  width: 6em;
  height: 2.8em;
`;
const ButnToBt = styled.img`
  width: 15px;
  height: 15px;
`;

export default Seoul;
