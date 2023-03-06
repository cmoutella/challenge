import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card as MuiCard, Typography } from '@mui/material'
import styled, { css } from 'styled-components'

export const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export const Card = styled(MuiCard)`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => css`
    padding: ${theme.spacings.sm};
  `}
`

export const Icon = styled(FontAwesomeIcon)`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.sm};
  `}
`

export const Message = styled(Typography)`
  font-size: 12px;
  line-height: 16px;
`
