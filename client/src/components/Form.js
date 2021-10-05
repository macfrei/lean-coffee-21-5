export default function Form({ onCreateCard }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Question</label>
      <input id="text" type="text" placeholder="Add question" name="text" />
      <button>Save</button>
    </form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { text } = form.elements
    const newCard = { text: text.value, author: 'Anonymous' }

    onCreateCard(newCard)
    form.reset()
    text.focus()
  }
}
