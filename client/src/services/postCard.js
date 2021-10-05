export default function postCard(card) {
  return fetch('/api/cards', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(card),
  }).then(res => res.json())
}
