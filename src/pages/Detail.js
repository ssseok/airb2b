import React from "react";
import DetailTop from "../components/DetailTop";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as listActions } from "../redux/modules/list";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { useParams } from "react-router-dom";
import DetailComment from "../components/DetailComment";
import DetailMap from "../components/DetailMap";
import DetailText from "../components/DetailText";

const Detail = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const _place_id = parseInt(params.placeId);
  const placeInfo = useSelector((state) => state.list.listOne);

  React.useEffect(() => {
    dispatch(listActions.getListDetailDB(_place_id));
    dispatch(commentActions.getCommentDB(_place_id));
  }, []);

  return (
    <React.Fragment>
      <DetailTop {...placeInfo} />
      <DetailText {...placeInfo} />
      <DetailComment {...placeInfo} />
      <DetailMap {...placeInfo} />
    </React.Fragment>
  );
};

export default Detail;
