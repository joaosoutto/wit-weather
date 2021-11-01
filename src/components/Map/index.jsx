import * as S from './styles'
import { Map as PingeonMap, Marker } from "pigeon-maps"
import { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'

const Map = () => {
  const {data} = useContext(AppContext)
  const [center, setCenter] = useState({lat: 13.084622, lng: 80.248357})
  const ZOOM_LEVEL = 9
  return(
  <S.Wrapper>
    <PingeonMap height={300} defaultCenter={[data.coord.lat, data.coord.lon]} defaultZoom={11}>
      <Marker width={50} anchor={[data.coord.lat, data.coord.lon]} />
    </PingeonMap>
  </S.Wrapper>
)
}
export default Map
