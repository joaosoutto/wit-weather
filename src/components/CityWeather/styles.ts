import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.main``;

export const Top = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: ${theme.spacings.xsmall};
    ${media.lessThan("large")`
      flex-direction: column;
      gap: 12px;
      margin-top: 0;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 0;
    `}
    > div {
      display: flex;
    }
  `}
`;

export const CityName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  ${media.lessThan("large")`
      gap: 8px;
  `}
`;

export const Date = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.small};
    font-weight: 500;
  `}
`;

export const Name = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.xxlarge};
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors.primary};
    ${media.lessThan("large")`
      font-size: ${theme.font.sizes.xlarge};
      border-left: 0.3rem solid ${theme.colors.primary};
    `}
  `}
`;

export const Forecast = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-size: ${theme.font.sizes.medium};
    margin-bottom: ${theme.spacings.xsmall};
    ${media.lessThan("large")`
      font-size: ${theme.font.sizes.xlarge};
      border-left: 0.3rem solid ${theme.colors.primary};  
    `}
  `}
`;

export const Temp = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xxlarge};
    margin-left: ${theme.spacings.xsmall};
    ${media.lessThan("large")`
      font-size: ${theme.font.sizes.xlarge};
      margin-left: ${theme.spacings.xxsmall};
    `}
  `}
`;

export const Infos = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.medium};
    ${media.lessThan("large")`
      grid-template-columns: 1fr;
      gap: 16px;
    `}
  `}
`;

export const Divider = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} auto;
    border: 1px solid ${theme.colors.primary};
    width: 90%;
    ${media.lessThan("large")`
      margin: ${theme.spacings.small} auto;
    `}
  `}
`;
