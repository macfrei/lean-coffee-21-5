import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import Card from './components/Card'
import Form from './components/Form'
import Error from './components/Error'
import getCards from './services/getCards'
import postCard from './services/postCard'
import deleteCard from './services/deleteCard'

function App() {
  const [cards, setCards] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    // GET http://localhost:4000/api/cards
    getCards()
      .then(data => setCards(data))
      .catch(error => setErrorMessage('Could not retrieve Cards'))
  }, [])

  return (
    <Main>
      {errorMessage && <Error errorMessage={errorMessage} />}
      <Form onCreateCard={createCard} />
      {cards.map(card => (
        <Card card={card} key={card._id} onRemoveCard={removeCard} />
      ))}
    </Main>
  )

  function createCard(card) {
    console.log(card)
    // postCard.js mit function postCard(card)
    // POST '/api/cards'
    // .then(card => setCards([...cards, card]))
    postCard(card)
      .then(data => setCards([...cards, data])) // {text: "What is HTML?", author: "Anonymous", _id: "231243f3jghv"}
      .catch(error => setErrorMessage('Could not create new Card'))
  }

  function removeCard(cardId) {
    // DELETE /api/cards/{id}
    deleteCard(cardId)
      .then(data => {
        const newCards = cards.filter(card => card._id !== data._id)
        setCards(newCards)
      })
      .catch(error => setErrorMessage('Card could not be deleted'))
  }
}

const Main = styled.main`
  display: grid;
  grid-gap: 20px;
  height: 100vh;
  padding: 30px;

  section {
    border: 2px solid black;
  }
`

export default App
