import React, { useEffect } from "react";
import { Text } from "../common";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { useParams } from "react-router-dom";
import ReactModal from "react-modal";

const DetailComment = (props) => {
  const dispatch = useDispatch();
  const [commentContent, setCommentContent] = React.useState("");

  const Params = useParams();
  const place_id = Params.placeId;
  const userNickname = localStorage.userNickname;

  const cmtOnChange = (e) => {
    setCommentContent(e.target.value);
  };
  const token = localStorage.getItem("token");

  const writeComment = () => {
    if (!token) {
      alert("로그인 후 이용해주세요!");
      return;
    }
    dispatch(
      commentActions.addCommentDB(userNickname, commentContent, place_id)
    );
  };

  return (
    <React.Fragment>
      <Text bold="700" size="18px">
        {props.rating} 후기
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
    </React.Fragment>
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
