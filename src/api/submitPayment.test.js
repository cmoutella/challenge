import getPlans from './getPlans'

const RESPONSE_MOCK = {
  couponCode: null,
  creditCardCPF: '98765432100',
  creditCardCVV: '123',
  creditCardExpirationDate: '10/21',
  creditCardHolder: 'Cássio Scofield',
  creditCardNumber: '5555444433332222',
  gateway: 'iugu',
  installments: 1,
  offerId: 18,
  userId: 1,
  id: 1
}

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(RESPONSE_MOCK)
  })
)

describe('list plans', () => {
  test('get list', () => {
    getPlans()

    expect(fetch).toHaveBeenCalledWith(
      'https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/offer'
    )
  })
})
