import styled, { css } from 'styled-components'
import { Card as MuiCard, Typography } from '@mui/material'

export const Card = styled(MuiCard)`
  ${({ theme }) => css`
    padding: ${theme.spacings.md};
    border-radius: ${theme.borderRadius.md};
    margin-bottom: 80px;
  `}
`

export const CardHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    border-radius: ${theme.borderRadius.md};
    background-color: ${theme.colors.grey.lighter};
    padding: ${theme.spacings.sm} 20px;
    color: ${theme.colors.primary};
    flex-wrap: wrap;
    margin-bottom: ${theme.spacings.md};
  `}
`

export const PlanIconWrapper = styled.div`
  ${({ theme }) => css`
    border-radius: 50%;
    background-color: ${theme.colors.grey.medium};
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 45px;
  `}
`

export const PlanData = styled.div`
  text-align: right;
`

export const PlanTitle = styled(Typography)`
  font-size: 16px;
`
export const PlanPrice = styled(Typography)`
  font-size: 14px;
`

export const WrapLine = styled.div`
  ${({ theme }) => css`
    display: block;
    margin-bottom: ${theme.spacings.md};
  `}
`

export const ResumeLine = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ResumeLabel = styled(Typography)`
  ${({ theme }) => css`
    color: ${theme.colors.grey.medium};
    font-size: 14px;
    line-height: 16px;
    text-align: left;
  `}
`

export const ResumeValue = styled(Typography)`
  ${({ theme }) => css`
    font-size: 14px;
    line-height: 16px;
    color: ${theme.colors.grey.dark};
    text-align: right;
  `}
`
