/*global kakao*/
import React, { useEffect } from "react";
import styled from "styled-components";
import GoogleMap from "google-map-react";
import { useDispatch } from "react-redux";
import Marker from "./Marker";

const Map = (props) => {
  const dispatch = useDispatch();

  const defaultPorps = {
    center: {
      lat: 37.579684,
      lng: 126.977054,
    },
    zoom: 7,
  };
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMap
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
        defaultCenter={defaultPorps.center}
        defaultZoom={defaultPorps.zoom}
      >
        <React.Fragment>
          <Marker lat={37.579684} lng={126.977054} />
        </React.Fragment>
      </GoogleMap>
    </div>
  );
  //   const [isOpen, setIsOpen] = React.useState(false);

  //   useEffect(() => {
  //     const container = document.getElementById("map");
  //     const options = {
  //       center: new kakao.maps.LatLng(37.579684, 126.977054),
  //       level: 3,
  //     };
  //     const map = new kakao.maps.Map(container, options);

  //     const markerPosition = new kakao.maps.LatLng(37.579684, 126.977054);
  //     const markerImage =
  //       "https://media.vlpt.us/images/ki5970/post/1e298116-874c-4843-9007-8c4b43acf6d1/-.png";
  //     const imageSize = new kakao.maps.Size(35, 35);
  //     const mImage = new kakao.maps.MarkerImage(markerImage, imageSize);

  //     const marker = new kakao.maps.Marker({
  //       position: markerPosition,
  //       image: mImage,
  //       clickalbe: true,
  //     });
  //     marker.setMap(map);

  //     const content = `<div style="padding:5px;">경복궁</div>`;
  //     const iwRemoveable = true;

  //     const infowindow = new kakao.maps.InfoWindow({
  //       content: content,
  //       removeable: iwRemoveable,
  //     });

  //     kakao.maps.event.addListener(marker, "click", function () {
  //       infowindow.open(map, marker);
  //     });
  //   }, []);

  //   return (
  //     <React.Fragment>
  //       <div id="map" style={{ width: "60%", height: "800px" }}></div>
  //     </React.Fragment>
  //   );
};

export default Map;
