import submitPayment from './submitPayment'
import submitPaymentResponse from './__fixtures__/submitPaymentResponse'
import submitPaymentPayload from './__fixtures__/submitPaymentPayload'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(submitPaymentResponse)
  })
)

describe('submit payment', () => {
  test('submit', () => {
    submitPayment(submitPaymentPayload)

    expect(fetch).toHaveBeenCalledWith(
      'https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/subscription',
      {
        body: JSON.stringify(submitPaymentPayload),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST'
      }
    )
  })
})
