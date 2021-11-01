import * as S from "./styles";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export type LogoProps = {
  size?: "small" | "normal" | "large";
};

const Logo = ({ size = "normal" }: LogoProps) => {
  const { refreshPage } = useContext(AppContext);
  return (
    <S.Image
      onClick={refreshPage}
      size={size}
      src={logo}
      alt="Wit Weather logo"
    />
  );
};
export default Logo;
