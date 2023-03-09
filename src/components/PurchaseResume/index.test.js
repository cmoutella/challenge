import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'
import planMock from '../../api/__fixtures__/onePlanMock'
import paymentResponseMock from '../../api/__fixtures__/submitPaymentResponse'
import PurchaseResume from '.'
import { render, screen } from '@testing-library/react'
import { formatCPF } from '@brazilian-utils/brazilian-utils'

const Template = () => {
  return (
    <ThemeProvider theme={theme}>
      <PurchaseResume plan={planMock} feedback={paymentResponseMock} />
    </ThemeProvider>
  )
}

describe('PurchaseResume', () => {
  test('render component', async () => {
    render(<Template />)
    const purchaseResumeCard = await screen.getByTestId('purchase-resume')

    expect(purchaseResumeCard).toBeInTheDocument()
  })
  test('display plan data', async () => {
    render(<Template />)

    const planTitle = await screen.getByText(planMock.title)
    const buyerId = await screen.getByText(
      formatCPF(paymentResponseMock.creditCardCPF)
    )

    expect(planTitle).toBeVisible()
    expect(buyerId).toBeVisible()
  })
})
