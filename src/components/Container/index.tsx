import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 80%;
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(${theme.grid.gutter});
    padding-right: calc(${theme.grid.gutter});
    padding-top: ${theme.spacings.xsmall};
    ${media.lessThan('large')`
      padding: ${theme.spacings.xxsmall} 0;
    `}
  `}
`
