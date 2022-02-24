import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Text } from "../common";
import { actionCreators as commentActions } from "../redux/modules/comment";

const CommentItem = (props) => {
  const dispatch = useDispatch();
  const { userNickname, commentContent, commentId } = props;
  const nickName = localStorage.getItem("userNickname");

  return (
    <React.Fragment>
      <Box>
        <Text margin="5px" padding="0" bold>
          {userNickname}{" "}
        </Text>
        <Text margin="5px" padding="0">
          {" "}
          {commentContent}
        </Text>
        {userNickname === nickName && (
          <DeleteBtn
            onClick={() => {
              dispatch(commentActions.deleteCommentDB(commentId));
            }}
          >
            삭제
          </DeleteBtn>
        )}
      </Box>
    </React.Fragment>
  );
};

const Box = styled.div`
  display: flex;
`;

const DeleteBtn = styled.button`
  width: 40px;
  height: 20px;
  background-color: #ff385c;
  color: #ffffff;
  border: none;
  border-radius: 10px;
`;

export default CommentItem;
