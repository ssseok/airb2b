import styled from "styled-components";
import React from "react";

const TextBlock = styled.p`
  font-size: ${(props) => (props.size ? props.size : "")};
  font-weight: ${(props) => (props.bold ? props.bold : "")};
  color: ${(props) => (props.color ? props.color : "")};
  margin: ${(props) => (props.margin ? props.margin : "")};
  text-align: ${(props) => (props.text_align ? props.text_align : "")};
  width: 100%;
  line-height: 110%;
  .user_name {
    font-size: 1.7rem;
    font-weight: 600;
  }
`;

const Text = (props) => {
  const { size, bold, color, margin, text_align, children, onClick } = props;
  const styles = {
    size: size,
    bold: bold,
    color: color,
    margin: margin,
    text_align: text_align,
    onClick: onClick, // 현석이가 추가
  };
  return <TextBlock {...styles}>{children}</TextBlock>;
};

Text.defaultProps = {
  children: null,
  text_align: false,
  size: "1rem",
  bold: false,
  color: "#222831",
  margin: "",
  onClick: () => {}, // 현석이가 추가
};

export default Text;
