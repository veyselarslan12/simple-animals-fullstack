const form = document.querySelector('form')
const searchInput = document.querySelector('input[name="animalName"]')
const resultsEl = document.getElementById('results')

const renderResults = (results = []) => {
  let resultsHTML = ''
  results.forEach(animal => resultsHTML += `
    <div>
      <h2>${animal.name}</h2>
      <p>Age: ${animal.age} | Type: ${animal.type}</p>
      <img src="${animal.image}" alt="Picture of ${animal.name}" width="150" height="auto" />
      <button class="delete" data-id=${animal.id} type="button">&times;</button>
    </div>
  `)

  resultsEl.innerHTML = resultsHTML
}

const getAllAnimals = () => {
  fetch('/api/animals')
    .then(response => response.json())
    .then(json => renderResults(json))
    .catch(err => console.log(err))
}

form.addEventListener('submit', e => {
  e.preventDefault()

  const animalName = searchInput.value

  fetch(`/api/animals/${animalName}`)
    .then(response => response.json())
    .then(json => {
      if (json.length > 0) {
        renderResults(json)
      } else {
        window.location.href = '/add-animal'
      }
    })
    .catch(err => console.log(err))
})

// on page load
getAllAnimals()


// delete listener with event delegation
resultsEl.addEventListener('click', (e) => {
  if (e.target.matches('.delete')) {
    const id = e.target.dataset.id
    fetch(`/api/animals/${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.status === 200) {
          window.location.reload()
        }
      })
      .catch(err => console.log(err))
  }
})