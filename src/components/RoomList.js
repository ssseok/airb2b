import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ReactComponent as LikeSvg } from "../svg/like_it_defualt.svg";
import { ReactComponent as LikeActiveSvg } from "../svg/like_it_active.svg";

const RoomList = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      {/* <Slide /> */}
      <RoomListsDiv>
        <div className="header">
          <span>300개 이상의 숙소 · 3월, 4월, 5월, 6월...의 일주일</span>
          <h2>지도에서 선택한 지역의 숙소</h2>
          <div className="corona">
            <span>
              예약하기 전에 코로나19 관련 여행 제한 사항을 확인하세요.
            </span>
            <a>자세히 알아보기</a>
          </div>
        </div>
        <RoomListUl>
          <li>
            <ImgSlide className="image">
              <Slider {...settings}>
                <div className="img_wrap">
                  <img src="https://a0.muscache.com/im/pictures/9fbce5a9-7e7b-49e9-890b-af9afc6d9608.jpg?im_w=720" />
                </div>
                <div className="img_wrap">
                  <img src="https://a0.muscache.com/im/pictures/9fbce5a9-7e7b-49e9-890b-af9afc6d9608.jpg?im_w=720" />
                </div>
              </Slider>
            </ImgSlide>
            <div className="content">
              <dl className="title">
                <dt>
                  <span>제주시의 집 전체</span>
                  <h3>제주 공항근처 시내에 위치한 한달살기 202</h3>
                </dt>
                <dd className="like_it">
                  <LikeSvg />
                  <LikeActiveSvg />
                </dd>
              </dl>
              <i className="line"></i>
              <span>최대 인원 2명침실 1개침대 1개욕실 1개</span>
              <br />
              <span>무료 주차 공간 · 주방 · 무선 인터넷 · 세탁기</span>
              <button>4월 29일 ~ 5월 6일 |더 보기</button>
              <dl>
                <dt>
                  <i className="star"></i>4.55 <span>(후기 175개)</span>
                </dt>
                <dd>
                  <Price className="discount">
                    ₩ 42,761
                    <em> / 박</em>
                  </Price>
                  <span>총액 ₩ 299,326</span>
                </dd>
              </dl>
            </div>
          </li>
        </RoomListUl>

        <div className="footer">
          전체 요금을 보려면 날짜를 입력하세요. 추가 요금이 적용되고 세금이
          추가될 수 있습니다.
        </div>
      </RoomListsDiv>
    </>
  );
};

const Price = styled.p`
  font-size: 18px;
  font-weight: 600;

  em {
    font-weight: 400;
  }

  &.discount {
    &:before {
      content: "₩ 22,761";
      font-weight: 400;
      color: #717171;
      text-decoration: line-through;
    }
  }
`;

const ImgSlide = styled.div`
  width: 300px;

  .slick-list {
    border-radius: 10px;
    overflow: hidden;
  }

  .slick-prev {
    left: 15px !important;
    z-index: 1;
  }

  .slick-next {
    right: 15px !important;
  }

  .slick-initialized .slick-slide {
    & > div {
      display: flex;
    }
  }

  .slick-dots {
    display: flex !important;
    justify-content: center;
    li {
      border: none !important;
    }
    li button {
      margin: 0;
      padding: 0;
      &:before {
        color: #fff;
      }
    }
  }

  .img_wrap {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 68.6666%;
  }

  img {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background: url("https://a0.muscache.com/im/pictures/9fbce5a9-7e7b-49e9-890b-af9afc6d9608.jpg?im_w=720")
      no-repeat center / contain;
  }
`;

const RoomListUl = styled.ul`
  border-top: solid 1px #ebebeb;
  margin-top: 12px;

  li {
    display: flex;
    padding: 24px 0;
    border-bottom: solid 1px #ebebeb;
  }

  .content {
    flex: auto;
    margin-left: 16px;
  }

  .title {
    align-items: flex-start;
  }

  dl {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  h3 {
    font-size: 18px;
  }

  .like_it {
    svg {
      width: 24px;
      height: 24px;
    }
  }

  .line {
    display: block;
    width: 32px;
    margin-top: 12px;
    margin-bottom: 10px;
    border-bottom: solid 1px #ebebeb;
  }

  .star {
    display: inline-block;
    width: 14px;
    height: 14px;
    background: url("./img/star.png") no-repeat center / cover;
    margin-right: 6px;
  }

  dd {
    text-align: right;
  }

  span {
    color: #717171;
    font-size: 14px;
  }

  button {
    display: block;
    margin-top: 12px;
  }
`;

const RoomListsDiv = styled.div`
  height: calc(100vh - 80px);
  overflow: auto;
  padding: 0 24px;
  margin: 0 auto;
  color: #222222;

  .header {
    margin-top: 24px;
    font-size: 14px;

    .corona {
      margin-top: 24px;
    }
  }

  h2 {
    font-size: 32px;
    font-weight: 600;
  }

  .footer {
    display: block;
    text-align: center;
    line-height: 120px;
    color: rgb(113, 113, 113);
    font-size: 14px;
  }
`;

export default RoomList;
