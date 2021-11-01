import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: ${theme.spacings.medium};
    ${media.lessThan("large")`
      margin-top: 8px;
    `}
  `}
`;

export const Label = styled.h4`
  ${({ theme }) => css`
    margin: 10px 0;;
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.primary};
  `}
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  margin-top: 20px;
  ${media.lessThan("large")`
    width: 150px;
    height: 150px;
  `}
`;
