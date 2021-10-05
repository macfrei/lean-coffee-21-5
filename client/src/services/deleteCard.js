export default function deleteCard(cardId) {
  return fetch(`/api/cards/${cardId}`, {
    method: 'DELETE',
  }).then(res => res.json())
}
