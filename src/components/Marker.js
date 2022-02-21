import React from "react";
import styled from "styled-components";
import { MdHome } from "react-icons/md";

const Marker = (props) => {
  const { text, type, isShow } = props;
  const [isSelected, setIsSelected] = React.useState(false);

  const toggleIsSelected = () => {
    setIsSelected(isSelected ? false : true);
  };

  const handleClick = () => {
    toggleIsSelected();
  };
  return (
    <React.Fragment>
      <MarkerArea>
        <HMarker onClick={handleClick} isSelected={isSelected}>
          <MdHome />
        </HMarker>
      </MarkerArea>
    </React.Fragment>
  );
};

Marker.defaultProps = {
  text: "₩80,347",
  type: "price",
  isShow: false,
};

const MarkerArea = styled.div`
  position: relative;
`;

const HMarker = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isFocus || props.isSelected ? "rgb(34, 34, 34)" : "#fff"};
  color: ${(props) =>
    props.isFocus || props.isSelected ? "#fff" : "rgb(34, 34, 34)"};
  transform: ${(props) =>
    props.isFocus || props.isSelected ? "scale(1.3)" : ""};
  svg {
    font-size: 24px;
  }
  :hover {
    transform: scale(1.3);
    transform-origin: 50% 50%;
    transition: transform 250ms cubic-bezier(0, 0, 0.1, 1) 0s;
  }
`;

// const PMarker = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: ${(props) =>
//     props.isSelected ? "rgb(34, 34, 34)" : "#fff"};
//   color: ${(props) => (props.isSelected ? "#fff" : "rgb(34, 34, 34)")};
//   transform: ${(props) => (props.isSelected ? "scale(1.3)" : "")};
//   border-radius: 28px;
//   box-shadow: rgb(0 0 0 / 4%) 0px 0px 0px 1px, rgb(0 0 0 / 18%) 0px 2px 4px;
//   height: 28px;
//   width: 58px;
//   padding: 0px 8px;
//   transform-origin: 50% 50%;
//   transition: transform 250ms cubic-bezier(0, 0, 0.1, 1) 0s;
//   font-weight: 800;
//   font-size: 13px;
//   line-height: 18px;
//   :hover {
//     transform: scale(1.1);
//   }
// `;

export default Marker;
