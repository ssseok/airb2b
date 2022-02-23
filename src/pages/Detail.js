import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { actionCreators as listActions } from "../redux/modules/list";
import { useParams } from "react-router-dom";
import DetailComment from "../components/DetailComment";

const Detail = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const _place_id = parseInt(params.placeId);
  const room_list = useSelector((state) => state.list.listOne);
  // console.log(room_list);

  React.useEffect(() => {
    dispatch(listActions.getListDetailDB(_place_id));
  }, []);

  return (
    <>
      <DetailComment {...room_list} />
    </>
  );
};

export default Detail;
