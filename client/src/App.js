import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    // GET http://localhost:4000/api/cards
    fetch('/api/cards')
      .then(res => res.json())
      .then(data => setCards(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <Main>
      {cards.map(card => (
        <section key={card._id}>
          <p>{card.text}</p>
          <p>{card.author}</p>
        </section>
      ))}
    </Main>
  )
}

const Main = styled.main`
  display: grid;
  grid-gap: 20px;
  height: 100vh;
  background-color: hotpink;
  color: white;
  padding: 30px;

  section {
    border: 2px solid white;
  }
`

export default App
