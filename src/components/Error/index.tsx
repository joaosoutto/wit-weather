import * as S from './styles'
import error from "../../assets/error.gif";


const Error = () => (
  <S.Wrapper>
    <S.Label>Ooops...</S.Label>
    <S.Label>City ​​not found</S.Label>
    <S.Image src={error} alt="a mad stormy cloud" />
  </S.Wrapper>
)

export default Error
