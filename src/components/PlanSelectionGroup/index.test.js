import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'
import * as listPlans from '../../state/plans'
import { Default } from './index.stories'
import getPlansResponse from '../../api/__fixtures__/getPlansResponse'

jest.spyOn(listPlans, 'default')
const usePlans = listPlans.default

describe('PlanSelectionGroup', () => {
  test('select plan', async () => {
    const getPlansMock = jest.fn()
    usePlans.mockImplementationOnce(() => ({
      listPlans: getPlansMock,
      getPlansStatus: 'DONE',
      plans: getPlansResponse
    }))
    render(
      <ThemeProvider theme={theme}>
        <Default />
      </ThemeProvider>
    )
    const selectionComponent = await screen.getByTestId('plan-selection-group')

    expect(selectionComponent).toBeInTheDocument()
  })
  test('display options cards', async () => {
    const getPlansMock = jest.fn()
    usePlans.mockImplementationOnce(() => ({
      listPlans: getPlansMock,
      getPlansStatus: 'DONE',
      plans: getPlansResponse
    }))
    render(
      <ThemeProvider theme={theme}>
        <Default />
      </ThemeProvider>
    )
    const selectionComponent = await screen.getAllByTestId('plan-option-card')

    expect(selectionComponent).toHaveLength(2)
  })
})
