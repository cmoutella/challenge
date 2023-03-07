import { Typography } from '@mui/material'
import styled, { css } from 'styled-components'

export const FeedbackMessageWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: ${theme.spacings.xxxl};
  `}
`

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    border-radius: 50%;
    border: 1px solid;
    border-color: ${theme.colors.grey.lighter};
    margin-bottom: ${theme.spacings.lg};
    padding: ${theme.spacings.md};
    display: inline-flex;
  `}
`

export const FeedbackMessage = styled(Typography)`
  ${({ theme }) => css`
    font-size: 20px;
    margin-bottom: ${theme.spacings.md};
    color: ${theme.colors.primary};
  `}
`

export const DetailedMessage = styled(Typography)`
  ${({ theme }) => css`
    font-size: 16px;
    max-width: 200px;
    color: ${theme.colors.grey.medium};
  `}
`
