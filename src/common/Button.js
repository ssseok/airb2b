import styled from "styled-components";
import React from "react";

const ButtonBlock = styled.button`
  width: ${(props) => (props.width ? props.width : "")};
  margin: ${(props) => (props.margin ? props.margin : "")};
  padding: ${(props) => (props.padding ? props.padding : "0.6em")};
  background: ${(props) => (props.bg ? props.bg : "")};
  color: ${(props) => (props.color ? props.color : "")};
  border: 0;
  border-radius: ${(props) => (props.border_radius ? props.border_radius : "")};
  font-size: ${(props) => (props.font_size ? props.font_size : "")};
  font-weight: ${(props) => (props.font_weight ? props.font_weight : "")};
  &:disabled {
    background: #82c9fd;
  }
`;

const Button = (props) => {
  const {
    width,
    margin,
    padding,
    border_radius,
    bg,
    color,
    font_size,
    font_weight,
    children,
    disabled,
    onClick,
  } = props;

  const styles = {
    width: width,
    margin: margin,
    padding: padding,
    border_radius: border_radius,
    bg: bg,
    color: color,
    font_size: font_size,
    font_weight: font_weight,
  };
  return (
    <ButtonBlock {...styles} onClick={onClick} disabled={disabled}>
      {children}
    </ButtonBlock>
  );
};

Button.defaultProps = {
  width: "",
  margin: false,
  padding: false,
  border_radius: false,
  bg: false,
  color: "white",
  font_size: false,
  font_weight: "400",
  children: null,
  onClick: () => {},
};

export default Button;
