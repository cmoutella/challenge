import { Typography } from '@mui/material'
import styled, { css } from 'styled-components'

export const FormWrapper = styled.div`
  max-width: 330px;
`

export const ValidationSection = styled.div`
  display: flex;
  justify-content: space-between;
`

export const FieldWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: ${theme.spacings.xl};
  `}
`

export const FormTitle = styled(Typography)`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xs};
  `}
`
export const FormSubtitle = styled(Typography)`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xl};
  `}
`
