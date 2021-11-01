import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import * as S from "./styles";

const Switch = () => {
  const { tempType, setTempType } = useContext(AppContext);

  return (
    <S.Wrapper>
      <S.Button
        disabled={tempType === "celsius"}
        onClick={() => setTempType("celsius")}
      >
        °C, m/s
      </S.Button>
      <S.Button
        disabled={tempType === "fahrenheit"}
        onClick={() => setTempType("fahrenheit")}
      >
        °F, mph
      </S.Button>
    </S.Wrapper>
  );
};

export default Switch;
