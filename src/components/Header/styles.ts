import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.header`
  ${({ theme }) => css`
    height: 8.5rem;
    background-color: ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: ${theme.spacings.small};
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    ${media.lessThan("large")`
    justify-content: center;
    padding: 0;
    `}
  `}
`;
