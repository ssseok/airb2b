import React from "react";
import styled from "styled-components";
import Auth from "./Auth";

import { ReactComponent as LogoSvg } from "../svg/logo.svg";
import { ReactComponent as SearchSvg } from "../svg/search.svg";
import { ReactComponent as GlobalSvg } from "../svg/Global.svg";

const Header = () => {
  return (
    <HeaderS>
      <div className="main_header">
        <LogoSvg className="logo" />
        <div>
          <input />
          <button>
            <SearchSvg />
          </button>
        </div>
        <span>호스트되기</span>
        <GlobalSvg />
        <Auth />
      </div>
    </HeaderS>
  );
};

const HeaderS = styled.header`
  position: sticky;
  top: 0;
  background-color: #000;
  font-size: 14px;

  .main_header {
    display: flex;
    max-width: 1440px;
    padding: 0 40px;
    margin: 0 auto;
  }
  .logo {
    color: red;
  }
`;

export default Header;
