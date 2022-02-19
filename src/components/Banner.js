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
                borderRadiuss="40px"
              >
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
background- color: black;
`;

const BackWrap = styled.div`
  height: 100vh;
  wight: 100vw;
  margin: 0 5vw;
`;

const ImageWrap = styled.div`
  display: flex;
  background-image: url("https://a0.muscache.com/im/pictures/f1502649-e034-40ab-9fed-7992b7d550c6.jpg?im_w=2560");
  height: 850px;
  width: 80vw;
  background-size: cover;
  background-position: center;
  align-items: flex-end;
  justify-content: center;
  .bigimage {
  }
`;
