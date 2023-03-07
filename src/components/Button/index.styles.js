import { Button as MuiButton } from '@mui/material'
import styled, { css } from 'styled-components'

const Button = styled(MuiButton)`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.lg};
    color: ${theme.colors.light};
    text-transform: capitalize;
    height: 50px;

    &:hover {
      background-color: ${theme.colors.primary};
      opacity: 0.85;
    }

    &.Mui-disabled {
      color: ${theme.colors.grey.dark};
      background-color: ${theme.colors.grey.light};
    }
  `}
`

export default Button
