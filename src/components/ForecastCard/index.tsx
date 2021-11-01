import * as S from './styles'

export type ForecastCardProps = {
  date: string,
  min: number,
  max: number,
  condition: string
}

const ForecastCard = ({
  date,
  min,
  max,
  condition
}: ForecastCardProps) => (
  <S.Wrapper>
    <S.Date>
      {date}
    </S.Date>
    <S.Temp>
      min: {min} / max: {max}
    </S.Temp>
    <S.Condition>
      {condition}
    </S.Condition>
  </S.Wrapper>
)

export default ForecastCard
