const router = require('express').Router()
const { v4: uuidv4 } = require('uuid')
const { readAnimalsDB, writeAnimalsDB } = require('../../utils/file-system')

// all animals ?orderby=age&order=ASC (query parameters)
router.get('/', async (req, res) => {
  const animals = await readAnimalsDB()

  let finalResult = animals

  if (req.query.orderby === 'age') {
    const order = req.query.order ? req.query.order : 'ASC'

    finalResult = animals.sort((a, b) => {
      if (order === 'ASC') {
        return a.age > b.age ? 1 : -1
      } else if (order === 'DESC') {
        return a.age < b.age ? 1 : -1
      }
    })
  }

  res.json(finalResult)
})

// single animal by name (using URL parameters)
router.get('/:name', async (req, res) => {
  const name = req.params.name.toLowerCase()

  const animals = await readAnimalsDB()

  let foundAnimals = animals
    .filter(animal => animal.name.toLowerCase() === name)

  res.json(foundAnimals)
})

// create a new animal
router.post('/', async (req, res) => {
  const newAnimal = { 
    id: uuidv4(), 
    ...req.body 
  }
  
  const animals = await readAnimalsDB()
  
  // push the new animal into animals array
  animals.push(newAnimal)
    
  await writeAnimalsDB(animals)
  
  res.status(201).json(newAnimal)
})

// delete an animal by its id
router.delete('/:id', async (req, res) => {
  const id = req.params.id

  const animals = await readAnimalsDB()
  
  const filteredAnimals = animals
    .filter(animal => animal.id !== id)

  await writeAnimalsDB(filteredAnimals)

  res.status(200).send()
})

module.exports = router