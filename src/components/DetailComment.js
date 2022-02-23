import React from "react";
import { Text } from "../common";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { useParams } from "react-router-dom";

const DetailComment = ({ rating }) => {
  //   const { placeId } = useParams();
  const dispatch = useDispatch();
  const [commentContent, setComment] = React.useState("");
  const [userNickname, setUserNickname] = React.useState("");
  //   const [placeId, setPlaceid] = React.useState(0);

  const cmtOnChange = (e) => {
    setComment(e.target.value);
  };

  const writeComment = () => {
    dispatch(commentActions.addCommentDB(userNickname, commentContent));
  };

  return (
    <>
      <Text bold="700" size="18px">
        {rating} 후기
      </Text>
      <Wrap>
        <Input
          placeholder="100자 이내로 후기를 작성해주세요."
          onChange={cmtOnChange}
          value={commentContent}
          maxLength="100"
        />
        <Button onClick={writeComment}>작성</Button>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  margin: 0px 50px 20px 0px;
`;

const Input = styled.input`
  border: 1px solid #212121;
  width: 60%;
  padding: 12px 4px;
  border-radius: 10px;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: #ff385c;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  width: 100px;
  margin: 0px 10px;
  cursor: pointer;
  type: submit;
`;
export default DetailComment;
