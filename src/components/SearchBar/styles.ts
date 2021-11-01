import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 3rem;
    margin: ${theme.spacings.xxsmall} 0 ${theme.spacings.small} 0;
  `}
`;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.lightOrange};
    border-radius: 2rem 0 0 2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightOrange};
    width: 80%;
    height: 100%;
    &:focus-within {
      box-shadow: 0 0 0.1rem ${theme.colors.primary};
    }
    ${media.lessThan("large")`
    width: 70%;
    font-size: 14px;
    padding: 0 ${theme.spacings.xxsmall};
  `}
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding-left: ${theme.spacings.xxsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
    ${media.lessThan("large")`
    font-size: 16px;
  `}
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.primary};

    & > svg {
      width: 100%;
    }

    ${media.lessThan("large")`
    display: none;
  `}
  `}
`;

export const SearchButton = styled.button`
  ${({ theme }) => css`
    width: 20%;
    border-radius: 0 2rem 2rem 0;
    height: 100%;
    border: none;
    cursor: pointer;
    background-color: ${theme.colors.primary};
    transition: all 0.3s;
    color: ${theme.colors.lightOrange};
    font-size: ${theme.font.sizes.medium};
    letter-spacing: 0.1rem;
    &:hover {
      background-color: #ffa700;
    }
    ${media.lessThan("large")`
    width: 30%;
    font-size: 16px;
    letter-spacing: 0.2rem;
  `}
  `}
`;
