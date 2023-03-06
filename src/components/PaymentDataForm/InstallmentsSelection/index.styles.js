import { InputLabel } from '@mui/material'
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

export const StoryWrapper = styled.div`
  max-width: 300px;
`
