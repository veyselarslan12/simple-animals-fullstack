const { readFile, writeFile } = require('fs/promises')
const path = require('path')

const dbPath = path.join(__dirname, '..', 'db', 'db.json')

const readAnimalsDB = async () => {
  // read the data
  const content = await readFile(dbPath, 'utf-8')
  // parse the data
  const animals = JSON.parse(content) 

  return animals
}

const writeAnimalsDB = async (animals) => {
  // stringify data and save to file
  return await writeFile(dbPath, JSON.stringify(animals))
}

module.exports = { readAnimalsDB, writeAnimalsDB }