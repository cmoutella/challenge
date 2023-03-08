import { Button } from '@mui/material'
import styled, { css } from 'styled-components'

export const FeedbackWrapper = styled.div`
  max-width: 310px;
  margin: 0 auto;
`

export const ActionsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PrimaryButton = styled(Button)`
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius.lg};
    padding: ${theme.spacings.md};
    width: 310px;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.light};
    margin-top: 20px;
    display: block;
    text-align: center;
    text-decoration: none !important;
  `}
`
