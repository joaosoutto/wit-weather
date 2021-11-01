import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.main`
  ${media.lessThan("large")`
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-self: flex-start;
    margin: 10px 0;
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    height: 40px;
    width: 90px;
    margin-left: ${theme.spacings.xxsmall};
    font-size: 14px;
    border-radius: 10px;
    border: none;
    background-color: ${theme.colors.primary};
    cursor: pointer;
    color: ${theme.colors.darkGray};
    transition: all 0.2s;
    &:disabled {
      background-color: ${theme.colors.lightOrange};
      color: ${theme.colors.gray};
    }
    ${media.lessThan("large")`
    width: 45%;
    margin: 0;
  `}
  `}
`;
