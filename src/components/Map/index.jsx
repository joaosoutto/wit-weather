import * as S from "./styles";
import { Map as PingeonMap, Marker } from "pigeon-maps";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Map = () => {
  const { data } = useContext(AppContext);
  return (
    <S.Wrapper>
      <PingeonMap
        height={300}
        defaultCenter={[data.coord.lat, data.coord.lon]}
        defaultZoom={11}
      >
        <Marker width={50} anchor={[data.coord.lat, data.coord.lon]} />
      </PingeonMap>
    </S.Wrapper>
  );
};
export default Map;
