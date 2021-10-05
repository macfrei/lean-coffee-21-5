import styled from 'styled-components'

function Card({ card, onDeleteQuestion }) {
  return (
    <Container>
      <DeleteButton onClick={() => onDeleteQuestion(card._id)}>x</DeleteButton>
      <p>{card.text}</p>
      <p>{card.author}</p>
    </Container>
  )
}

const Container = styled.section`
  position: relative;
`

const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`

export default Card
