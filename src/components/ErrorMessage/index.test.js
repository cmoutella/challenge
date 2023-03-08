import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'
import ErrorMessage from '.'

describe('ErrorMessage', () => {
  test('find component', async () => {
    render(
      <ThemeProvider theme={theme}>
        <ErrorMessage message="My Error" />
      </ThemeProvider>
    )
    const errorMessageComponent = await screen.findByText('My Error')

    expect(errorMessageComponent).toBeInTheDocument()
  })
})
