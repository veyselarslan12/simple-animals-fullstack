const form = document.querySelector('form')
const nameInput = document.querySelector('input[name="name"]')
const typeInput = document.querySelector('input[name="type"]')
const ageInput = document.querySelector('input[name="age"]')
const imageInput = document.querySelector('input[name="image"]')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const newAnimal = {
    name: nameInput.value,
    age: ageInput.value,
    type: typeInput.value,
    imageInput: imageInput.value
  }

  fetch('/api/animals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newAnimal)
  })
    .then(response => response.json())
    .then(json => window.location.href = '/')
    .catch(err => console.log(err))
})