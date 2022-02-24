import React from "react";
import styled from "styled-components";
import CommentItem from "./CommentItem";
import { Text } from "../common";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as commentActions } from "../redux/modules/comment";

const CommentList = (props) => {
  const dispatch = useDispatch();
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

// const CommentItem = (props) => {
//   const { userNickname, commentContent } = props;
//   return (
//     <React.Fragment>
//       <Box>
//         <Text margin="5px" padding="0" bold>
//           {userNickname}{" "}
//         </Text>
//         <Text margin="5px" padding="0">
//           {" "}
//           {commentContent}
//         </Text>
//       </Box>
//     </React.Fragment>
//   );
// };

const Wrap = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

// const Box = styled.div`
//   display: flex;
// `;

// const DeleteBtn = styled.button`
//   width: 40px;
//   height: 20px;
//   background-color: #ff385c;
//   color: #ffffff;
//   border: none;
//   border-radius: 10px;
// `;

export default CommentList;
