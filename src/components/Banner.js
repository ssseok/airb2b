import React from "react";
import styled from "styled-components";
import { Text, Button } from "../common";

const Banner = (props) => {
  return (
    <React.Fragment>
      <BannerWrap>
        <BackWrap>
          <ImageWrap>
            <div className="bigimage">
              <Text size="48px" bold color="#ffffff" center>
                에어비앤비가 <br /> 여행지를 찾아드릴게요!
              </Text>
              <Button
                margin="20px 0px 80px 160px"
                padding=""
                width="30%"
                color="222222"
                borderRadiuss="40px">
                유연한 검색
              </Button>
            </div>
          </ImageWrap>
        </BackWrap>
      </BannerWrap>
    </React.Fragment>
  );
};

export default Banner;

const BannerWrap = styled.div`
  background-color: #000;
`;

const BackWrap = styled.div`
  height: 105vh;
  padding: 80px 0;
  margin: 0 5vw;
`;

const ImageWrap = styled.div`
  display: flex;
  border-radius: 30px;
  background-image: url("https://a0.muscache.com/im/pictures/f1502649-e034-40ab-9fed-7992b7d550c6.jpg?im_w=2560");
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  align-items: flex-end;
  justify-content: center;

  p {
    line-height: 54px;
    text-align: center;
  }
`;
