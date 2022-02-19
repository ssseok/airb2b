import React from "react";
import styled from "styled-components";
const MainBottom = () => {
  return (
    <ImageWrap>
      <div>
        <img
          src="https://a0.muscache.com/im/pictures/0903a029-e330-41f6-add2-652954f62185.jpg?im_w=1440"
          alt="이미지"
        />
      </div>
      <div className="text">
        <h2>
          호스팅에 관해 <br />
          궁금하신 점이 <br />
          있나요?
        </h2>
        <button>슈퍼호스트에게 물어보세요</button>
      </div>
    </ImageWrap>
  );
};
const ImageWrap = styled.div`
  position: relative;
  padding-bottom: calc(556 / 1113 * 100%);
  height: 0;
  overflow: hidden;
  letter-spacing: -2.98px;

  div {
    position: absolute;
  }
  img {
    top: 50%;
    left: 50%;
    z-index: 1;
  }

  .text {
    display: flex;
    flex-direction: column;
    height: 100%;

    padding: 40px;
    line-height: 54px;
  }
  h2 {
    flex: auto;
    color: #fff;
    font-size: 49px;
  }
  button {
    border-radius: 8px;
    background-color: #fff;
  }
`;
export default MainBottom;
