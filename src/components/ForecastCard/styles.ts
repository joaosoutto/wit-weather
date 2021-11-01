import styled, {css} from 'styled-components'

export const Wrapper = styled.main`
${({ theme }) => css`

display: flex;
align-items: center;
justify-content: space-between;
width: 90%;
padding: 10px;
padding-left: ${theme.spacings.xxsmall};
border-left: 0.2rem solid ${theme.colors.primary};
margin: ${theme.spacings.xxsmall} 0;
`}
`

export const Date = styled.h4`
${({ theme }) => css`
color: ${theme.colors.darkGray};
padding-left: 3px;
border-left: 0.3rem solid ${theme.colors.lightGray};
`}


`

export const Temp = styled.h4`
${({ theme }) => css`
color: ${theme.colors.darkGray};
padding-left: 3px;
border-left: 0.3rem solid ${theme.colors.lightGray};
`}


`

export const Condition = styled.h4`
${({ theme }) => css`
color: ${theme.colors.darkGray};
padding-left: 3px;
border-left: 0.3rem solid ${theme.colors.lightGray};
`}


`

