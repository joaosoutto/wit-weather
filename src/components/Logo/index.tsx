import * as S from "./styles";
import logo from "../../assets/logo.png";

export type LogoProps = {
  size?: "small" | "normal" | "large";
};

const Logo = ({ size = "normal" }: LogoProps) => (
  <S.Image size={size} src={logo} alt="Wit Weather logo" />
);
export default Logo;
