import moment from "moment";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import ForecastCard from "../ForecastCard";
import Map from "../../components/Map";

import Switch from "../Switch";
import * as S from "./styles";

const CityWeather = () => {
  const { data, tempType, convertToF, forecastData } = useContext(AppContext);

  return (
    <S.Wrapper>
      <S.CityName>
        <S.Top>
          <div>
            <S.Name>
              {data.name}, {data.sys.country}
            </S.Name>
            <S.Temp>
              {tempType === "celsius" && `${parseInt(data.main.temp)}°C`}
              {tempType === "fahrenheit" &&
                `${parseInt(convertToF(data.main.temp))}°F`}
            </S.Temp>
          </div>
          <Switch />
        </S.Top>
        <div style={{ display: "flex" }}>
          <S.Date>{moment().format("lll")}</S.Date>
        </div>
      </S.CityName>
      <S.Divider />
      <S.Infos>
        <div>
          <S.Forecast>5-day forecast</S.Forecast>
          {forecastData.map((el: any, index: number) => {
            if (
              index === 0 ||
              index === 8 ||
              index === 16 ||
              index === 24 ||
              index === 32
            )
              return (
                <ForecastCard
                  key={index}
                  date={moment(el.dt_txt).format("ll")}
                  min={
                    tempType === "celsius"
                      ? parseInt(el.main.temp_min)
                      : parseInt(convertToF(el.main.temp_min))
                  }
                  max={
                    tempType === "celsius"
                      ? parseInt(el.main.temp_max)
                      : parseInt(convertToF(el.main.temp_max))
                  }
                  condition={el.weather[0].main}
                />
              );
            return null;
          })}
        </div>
        <Map />{" "}
      </S.Infos>
    </S.Wrapper>
  );
};

export default CityWeather;
