import { screen, render } from '@testing-library/react'
import Error from './Error'

describe('Error', () => {
  it('renders the error message', () => {
    render(<Error errorMessage={'Could not load'} />)

    // renders the text "Error"
    expect(screen.getByText('Error')).toBeInTheDocument()

    // renders the text
    expect(screen.getByText('Could not load')).toBeInTheDocument()
  })
})
