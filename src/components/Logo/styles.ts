import styled, { css } from "styled-components";
import media from "styled-media-query";

import { LogoProps } from ".";

const wrapperModifiers = {
  small: () => css`
    width: 8rem;
    height: 3rem;
  `,
  normal: () => css`
    width: 13rem;
    height: 5rem;
  `,
  large: () => css`
    width: 18rem;
    height: 7rem;
  `,
};

export const Image = styled.img<LogoProps>`
  ${({ size }) => css`
    ${!!size && wrapperModifiers[size]}
  `}
`;
