import { Typography } from '@mui/material'
import styled, { css } from 'styled-components'

export const SectionTitle = styled(Typography)`
  ${({ theme }) => css`
    font-size: 20px;
    letter-spacing: -0.02em;
    line-height: 26px;
    margin-bottom: ${theme.spacings.xs};
  `}
`

export const SectionSubtitle = styled(Typography)`
  ${({ theme }) => css`
    font-size: 12px;
    line-height: 16px;
    margin-bottom: ${theme.spacings.xl};
    border-radius: ${theme.borderRadius.md};
    border: 1px solid;
    border-color: ${theme.colors.grey.lighter};
    padding: ${theme.spacings.xxs} ${theme.spacings.md};
    display: inline-block;
  `}
`

export const OptionWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.md};
  `}
`

export const FormSection = styled.div``
