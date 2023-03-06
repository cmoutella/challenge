import { Input, InputLabel } from '@mui/material'
import styled, { css } from 'styled-components'

export const Label = styled(InputLabel)`
  ${({ theme }) => css`
    font-size: 12px;
    line-height: 16px;
    transform: scale(1) !important;
    color: ${theme.colors.grey.dark};
    margin-bottom: ${theme.spacings.xxs};
  `}
`

export const InputField = styled(Input)`
  ${({ theme }) => css`
    color: ${theme.colors.grey.medium};
    letter-spacing: -0.02em;
    line-height: 21px;
    font-size: 16px;

    input:after {
      border-color: ${theme.colors.grey.lightest};
    }
  `}
`
