import React from "react";
import GoogleMap from "google-map-react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import DetailMarker from "./DetailMarker";

const DetailMap = (props) => {
  const defaultProps = {
    lat: props.lat,
    lng: props.lng,
  };

  return (
    <div className="mapmap" style={{ height: "480px" }}>
      <GoogleMap
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
        center={defaultProps}
        defaultZoom={14}
        // onChildMouseLeave={this.onChildMouseLeave}
        // onChildMouseEnter={this.onChildMouseEnter}
      >
        <DetailMarker lat={props.lat} lng={props.lng} />
      </GoogleMap>
    </div>
  );
};

const MapWrapS = styled.div`
  width: 100%;
  height: 400px;
`;

export default DetailMap;
