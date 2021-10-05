import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from './Form'

describe('CreateCharacterForm', () => {
  it('renders form elements', () => {
    const mockOnCreateCard = jest.fn()
    render(<Form onCreateCard={mockOnCreateCard} />)

    const input = screen.getByLabelText('Question')
    expect(input).toBeInTheDocument()

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('calls the onCreateCard function with correct parameters', () => {
    const mockOnCreateCard = jest.fn()
    render(<Form onCreateCard={mockOnCreateCard} />)

    const input = screen.getByLabelText('Question')
    userEvent.type(input, 'What and Why?')

    const button = screen.getByRole('button')
    userEvent.click(button)

    expect(mockOnCreateCard).toHaveBeenCalledWith({
      text: 'What and Why?',
      author: 'Anonymous',
    })
  })
})
