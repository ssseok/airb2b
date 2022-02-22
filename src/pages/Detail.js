import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailList from "../components/DetailList";
import { actionCreators as listAction } from "../redux/modules/list";

const Detail = (props) => {
  const dispatch = useDispatch();
  const room_list = useSelector((state) => state.list);
  console.log(room_list);

  React.useEffect(() => {
    dispatch(listAction.getListDB(1));
  }, []);

  return (
    <React.Fragment>
      <DetailList />
    </React.Fragment>
  );
};

export default Detail;
