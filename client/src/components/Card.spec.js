import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Card from './Card'

const card = {
  _id: '5e9f9c9f9f9f9f9f9f9f9f9',
  text: 'What?',
  author: 'Luke',
}

describe('Card', () => {
  it('renders the Card', () => {
    const mockOnDeleteQuestion = jest.fn()
    render(<Card card={card} onRemoveCard={mockOnDeleteQuestion} />)

    // renders the text
    expect(screen.getByText(card.text)).toBeInTheDocument()

    // renders the author
    expect(screen.getByText(card.author)).toBeInTheDocument()

    // renders the delete button
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('x')
  })

  it('calls onDeleteQuestion when the delete button is clicked', () => {
    const mockOnDeleteQuestion = jest.fn()
    render(<Card card={card} onRemoveCard={mockOnDeleteQuestion} />)
    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(mockOnDeleteQuestion).toHaveBeenCalledTimes(1)
    expect(mockOnDeleteQuestion).toHaveBeenCalledWith(card._id)
  })
})
