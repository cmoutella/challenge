import getPlans from './getPlans'

const MOCK_PLANS = ['plan1', 'plan2']

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_PLANS)
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
