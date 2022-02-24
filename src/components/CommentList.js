import React from "react";
import styled from "styled-components";
import { Text } from "../common";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";

const CommentList = (props) => {
  const commentData = useSelector((state) => state.comment.list);

  return (
    <React.Fragment>
      <Wrap>
        {commentData.map((p, i) => {
          return <CommentItem key={i} {...p}></CommentItem>;
        })}
      </Wrap>
    </React.Fragment>
  );
};

const CommentItem = (props) => {
  const { userNickname, commentContent } = props;
  return (
    <React.Fragment>
      <Box>
        <span>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/jaemagazine-45854.appspot.com/o/image%2FJULhtsuBmabuNrbQ5Vv6ZLivSUB3_1644407428385?alt=media&token=5cd591a8-4369-4c15-8865-2a5dc67e17cc"
            alt="프로필"
          />
        </span>
        <Text margin="5px" padding="0" bold>
          {userNickname}
        </Text>
        <Text size="14px" margin="5px" padding="0">
          {commentContent}
        </Text>
      </Box>
    </React.Fragment>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const Box = styled.div`
  display: flex;
  align-items: center;

  span {
    width: 20px;
    height: 20px;
    border-radius: 100%;
    overflow: hidden;
  }
  img {
    object-position: 50% 10%;
  }
`;

export default CommentList;
