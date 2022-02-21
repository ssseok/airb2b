import React from "react";
import styled from "styled-components";
import Auth from "./Auth";

import { ReactComponent as LogoSvg } from "../svg/logo.svg";
import { ReactComponent as SearchSvg } from "../svg/search.svg";
// import { ReactComponent as GlobalSvg } from "../svg/global.svg";
import { ReactComponent as GlobalSvg_w } from "../svg/global_white.svg";

const Header = () => {
  const [scroll, setScroll] = React.useState(0);
  const windowOffset = window.pageYOffset;

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.pageYOffset);
    });
  }, [setScroll, windowOffset]);

  console.log(scroll);

  return (
    <HeaderS className={` ${scroll > 54 ? "sticky" : ""}`}>
      <div className="main_header ">
        <a href="#" className="logo">
          <LogoSvg />
        </a>
        <div className="search">
          <label>
            <input type="text" placeholder="검색 시작하기" />
            <button>
              <SearchSvg />
            </button>
          </label>
        </div>
        <div className="auth_wrap">
          <span>호스트되기</span>
          <GlobalSvg_w className="global" />
          <Auth />
        </div>
      </div>
    </HeaderS>
  );
};

const HeaderS = styled.header`
  position: sticky;
  top: 0;
  background-color: #000;
  font-size: 14px;
  color: #fff;
  z-index: 10;
  transition: all 0.3s;

  .main_header {
    display: flex;
    align-items: center;
    max-width: 1760px;
    padding: 0 80px;
    margin: 0 auto;
    height: 80px;
  }

  .logo {
    display: inline-flex;
    flex: 1;
    align-items: center;
    position: relative;
    height: 80px;

    svg {
      width: 30px;
      height: 32px;
      color: #fff;
    }

    &:before {
      content: "";
      position: absolute;
      top: 8px;
      bottom: 8px;
      left: -8px;
      right: -8px;
    }
  }

  .search {
    flex: 1;
    text-align: center;
    label {
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      width: 300px;
      height: 48px;
      border-radius: 50px;
      border: solid 1px rgb(221, 221, 221);
      background-color: #fff;

      box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
      transition: all 0.3s;
      &:hover {
        box-shadow: 0 3px 4px rgb(0 0 0 / 8%), 0 8px 12px rgb(0 0 0 / 5%);
      }
    }

    input {
      flex: auto;
      border: none;
      padding: 0 16px;
      color: #222;
      border-radius: 50px;

      &:focus {
        outline: none;
      }
    }

    button {
      width: 32px;
      height: 32px;
      margin: 7px;
      margin-left: 0;
      border-radius: 40px;
      background-color: #ff385c;
      color: #fff;
      svg {
        margin: 0 auto;
      }
    }
  }

  .auth_wrap {
    display: flex;
    justify-content: flex-end;
    flex: 1;
  }

  span,
  .global {
    color: #fff;
    fill: #fff;
    padding: 12px;
    border-radius: 50px;
    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }
  }

  &.sticky {
    background-color: #fff;

    .logo svg {
      width: auto;
      color: rgb(255, 56, 92);
    }

    span {
      color: #222;

      &:hover {
        background-color: rgb(247, 247, 247);
      }
    }

    .auth_wrap {
      button {
        transition: all 0.3s;

        &:hover {
          box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px 0px;
        }
      }
    }
  }
`;

export default Header;
