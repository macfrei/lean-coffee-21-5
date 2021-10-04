export default function getCards() {
  return fetch('/api/cards').then(res => res.json())
}
