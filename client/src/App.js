import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
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
        <section key={card._id}>
          <p>{card.text}</p>
          <p>{card.author}</p>
        </section>
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
