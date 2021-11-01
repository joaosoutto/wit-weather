import * as S from "./styles";
import gif from "../../assets/weather.gif";

const Loading = () => (
  <S.Wrapper>
    <S.Image src={gif} alt="a thermometer measuring temperature" />
    <S.Label>Loading...</S.Label>
  </S.Wrapper>
);

export default Loading;
