import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import PlanRadioCard from '.'
import theme from '../../styles/theme'
import submitPaymentResponse from '../../api/__fixtures__/submitPaymentResponse'

describe('PlanRadioCard', () => {
  test('show plan name', async () => {
    render(
      <ThemeProvider theme={theme}>
        <PlanRadioCard planData={submitPaymentResponse} />
      </ThemeProvider>
    )
    const planTitle = await screen.findByText(
      `${submitPaymentResponse.title} | ${submitPaymentResponse.description}`
    )

    expect(planTitle).toBeInTheDocument()
  })
  test('show price', async () => {
    render(
      <ThemeProvider theme={theme}>
        <PlanRadioCard planData={submitPaymentResponse} />
      </ThemeProvider>
    )
    const calcPrice =
      submitPaymentResponse.fullPrice - submitPaymentResponse.discountAmmount
    const price = await screen.findByText(
      `De R$ ${submitPaymentResponse.fullPrice} | Por R$ ${calcPrice}`
    )

    expect(price).toBeInTheDocument()
  })
  test('show discount', async () => {
    render(
      <ThemeProvider theme={theme}>
        <PlanRadioCard planData={submitPaymentResponse} />
      </ThemeProvider>
    )
    const discount = await screen.findByText(
      `-${submitPaymentResponse.discountPercentage * 100}%`
    )

    expect(discount).toBeInTheDocument()
  })
})
