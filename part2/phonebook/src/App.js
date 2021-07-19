import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ newFilter, setFilter ] = useState('')

const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(response.data)
        setPersons(response.data)
      })
  }

  console.log('render', persons.length, 'persons')
  useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    
    const idx = persons.findIndex((person) => person.name === personObject.name)
    idx === -1 ? setPersons(persons.concat(personObject)) : window.alert(`${newName} is already added to phonebook`)
    setNewName('')
    setNewNumber('')
  }

  const handleNewName = (event) => {
    // event.preventDefault()
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    // event.preventDefault()
    setNewNumber(event.target.value)
  }

  const handleNewFilter = (event) => {
    setFilter(event.target.value)
  }

  const filteredPerson = persons.filter((person) => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        text='filter shown with' 
        value={newFilter}
        onChange={handleNewFilter}/>

      <h2>Add a new</h2>
      <PersonForm 
        onSubmitFunc={addPerson} 
        newName={newName} 
        newNumber={newNumber} 
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
      />

      <h2>Numbers</h2>
      <Persons persons={filteredPerson}/>
    </div>
  )
}

export default App;