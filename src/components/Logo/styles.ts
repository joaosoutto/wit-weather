import styled, { css } from "styled-components";
import { LogoProps } from ".";

const wrapperModifiers = {
  small: () => css`
    width: 8rem;
    height: 3rem;
    cursor: pointer;
  `,
  normal: () => css`
    width: 13rem;
    height: 5rem;
    cursor: pointer;
  `,
  large: () => css`
    width: 18rem;
    height: 7rem;
    cursor: pointer;
  `,
};

export const Image = styled.img<LogoProps>`
  ${({ size }) => css`
    ${!!size && wrapperModifiers[size]}
  `}
`;
