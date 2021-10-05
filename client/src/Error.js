import styled from 'styled-components'

function Error({ errorMessage }) {
  if (!errorMessage) return null
  return (
    <Container>
      <h2>Error</h2>
      <p>{errorMessage}</p>
    </Container>
  )
}

const Container = styled.div`
  background: #ffe0e0;
  border: 1px solid #ffa2a2;
`

export default Error
