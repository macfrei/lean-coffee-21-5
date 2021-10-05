import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import Card from './Card'
import Form from './components/Form'
import getCards from './services/getCards'

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    // GET http://localhost:4000/api/cards
    getCards()
      .then(data => setCards(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <Main>
      <Form onCreateCard={createCard} />
      {cards.map(card => (
        <Card card={card} key={card._id} onDeleteCard={deleteCard} />
      ))}
    </Main>
  )

  function createCard(card) {
    console.log(card)
    // postCard.js mit function postCard(card)
    // POST '/api/cards'
    // .then(card => setCards([...cards, card]))
    fetch('/api/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(card),
    })
      .then(res => res.json())
      .then(data => setCards([...cards, data])) // {text: "What is HTML?", author: "Anonymous", _id: "231243f3jghv"}
      .catch(error => console.error(error))
  }

  function deleteCard(cardId) {
    // DELETE /api/cards/{id}
    fetch(`/api/cards/${cardId}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        const newCards = cards.filter(card => card._id !== data._id)
        setCards(newCards)
      })
      .catch(error => console.error(error))
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
