import { Container, Logo, Text } from "./styled";
import MapBox, { Marker } from "react-map-gl";
import { useISS } from "../../hooks/useISS";
import ImgISS from "../../assets/iss.png";
import { useEffect, useState } from "react";
import { point, distance as turfDistance } from "@turf/turf";
const Map = () => {
  const { data } = useISS();
  const [myLat, setMyLat] = useState(0);
  const [myLng, setMyLng] = useState(0);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setMyLat(position.coords.latitude);
      setMyLng(position.coords.longitude);
    });
  }, []);
  useEffect(() => {
    let from = point([myLng, myLat]);
    let to = point([
      Number(data?.iss_position.longitude) || 0,
      Number(data?.iss_position.latitude) || 0,
    ]);

    let dist = turfDistance(to, from, { units: "kilometers" });
    setDistance(dist);
  }, [myLat, myLng, data?.iss_position.latitude, data?.iss_position.longitude]);
  return (
    <Container>
      <MapBox
        initialViewState={{
          longitude: Number(data?.iss_position?.longitude) || 0,
          latitude: Number(data?.iss_position?.latitude) || 0,
          zoom: 1,
        }}
        mapboxAccessToken="pk.eyJ1Ijoid3lsZ25lciIsImEiOiJjbDcyZm5yM3cweHY2M25xcG9iZmUwdWFxIn0.dDwB2XUh8Ob2lllIIOrB_g
        "
        style={{ width: "80vw", height: "60vh" }}
        mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
      >
        <Marker
          latitude={Number(data?.iss_position?.latitude) || 0}
          longitude={Number(data?.iss_position?.longitude) || 0}
        >
          <Logo
            src={ImgISS}
            alt="iss"
            style={{ width: "80px", height: "80px" }}
          />
        </Marker>
        <Marker latitude={myLat} longitude={myLng} color="#f00" />
      </MapBox>
      <Text>Distância entre você e a ISS: {distance.toFixed(0)} KM</Text>
    </Container>
  );
};

export { Map };
