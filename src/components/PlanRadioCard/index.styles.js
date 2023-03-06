import { Typography, Card, CardContent, Radio } from '@mui/material'
import styled, { css } from 'styled-components'

export const PaymentOptionCard = styled(Card)`
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius.md};
    border: '1px solid';
    border-color: ${theme.colors.primary};
    max-width: 330px;
    padding: 0 ${theme.spacings.lg};

    .MuiFormControlLabel-root {
      margin-left: 0 !important;
    }
  `}
`

export const TitleTypography = styled(Typography)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: 14px;
    margin-bottom: ${theme.spacings.xxs};
  `}
`

export const PriceTypography = styled(Typography)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: 12px;
    margin-bottom: ${theme.spacings.xxs};
    display: flex;
    align-items: center;
  `}
`

export const InstallmentsTypography = styled(Typography)`
  ${({ theme }) => css`
    font-size: 10px;
    color: ${theme.colors.secondary};
  `}
`
export const ContentWrapper = styled(CardContent)`
  ${({ theme }) => css`
    padding: ${theme.spacings.lg} 0;
    margin-left: 0;
    width: 200px;
  `}
`

export const radioLabelRoot = css`
  min-width: 100%;
`

export const DiscountTag = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius.sm};
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.light};
    padding: 4px 5px;
    font-size: 10px;
    line-height: 1;
    letter-spacing: -0.02em;
    font-weight: 400;
    width: 40px;
    height: 16px;
    text-align: center;
    margin-left: ${theme.spacings.sm};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

export const StyledRadio = styled(Radio)`
  .MuiSvgIcon-root {
    color: ${({ theme }) => theme.colors.primary};
  }
`
