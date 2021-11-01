import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: ${theme.spacings.small};
    ${media.lessThan("large")`
      padding: 0;
    `}
  `}
`;

export const Text = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    text-align: center;
    color: ${theme.colors.gray};
    margin: ${theme.spacings.xxsmall} 0;
    ${media.lessThan("large")`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`;
