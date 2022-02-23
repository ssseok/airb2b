import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailList from "../components/DetailList";
import { actionCreators as listActions } from "../redux/modules/list";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const _place_id = parseInt(params.placeId);

  React.useEffect(() => {
    dispatch(listActions.getListDetailDB(_place_id));
  }, []);

  return <>{/* <DetailList /> */}</>;
};

export default Detail;
