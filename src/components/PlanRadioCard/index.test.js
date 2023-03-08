import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import PlanRadioCard from '.'
import theme from '../../styles/theme'

const PLAN_MOCK = {
  id: 'plan',
  storeId: 'store_plan',
  title: 'Anual',
  description: 'Parcelado',
  fullPrice: 600,
  installments: 10,
  discountAmmount: 60,
  discountPercentage: 0.1
}

describe('PlanRadioCard', () => {
  test('show plan name', async () => {
    render(
      <ThemeProvider theme={theme}>
        <PlanRadioCard planData={PLAN_MOCK} />
      </ThemeProvider>
    )
    const planTitle = await screen.findByText(
      `${PLAN_MOCK.title} | ${PLAN_MOCK.description}`
    )

    expect(planTitle).toBeInTheDocument()
  })
  test('show price', async () => {
    render(
      <ThemeProvider theme={theme}>
        <PlanRadioCard planData={PLAN_MOCK} />
      </ThemeProvider>
    )
    const calcPrice = PLAN_MOCK.fullPrice - PLAN_MOCK.discountAmmount
    const price = await screen.findByText(
      `De R$ ${PLAN_MOCK.fullPrice} | Por R$ ${calcPrice}`
    )

    expect(price).toBeInTheDocument()
  })
  test('show discount', async () => {
    render(
      <ThemeProvider theme={theme}>
        <PlanRadioCard planData={PLAN_MOCK} />
      </ThemeProvider>
    )
    const discount = await screen.findByText(
      `-${PLAN_MOCK.discountPercentage * 100}%`
    )

    expect(discount).toBeInTheDocument()
  })
})
