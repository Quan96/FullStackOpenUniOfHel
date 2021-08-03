import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ newFilter, setFilter ] = useState('')
  const [ newMessage, setMessage ] = useState({text: '', type: ''})

  console.log('render', persons.length, 'persons')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
    
    const idx = persons.findIndex((person) => person.name === personObject.name)
    if (idx === -1){
      personService
        .addPerson(personObject)
        .then(
            setPersons(persons.concat(personObject)),
            setMessage({text:`Added ${newName}`, type: 'success'})
        )
    } else {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
        personService
          .updatePerson(persons[idx].id, personObject)
          .then(resp => {
            if (resp.status === 404){
              setPersons(persons.map(p => p.id !== persons[idx].id))
              setMessage({text: `Information of ${newName} has already been removed from server`, type:'error'})
            }
          })
    setNewName('')
    setNewNumber('')
      }
    }
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

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification text={newMessage.text} type={newMessage.type}/>
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
      <Persons  persons={persons}
                keyword={newFilter} 
                setPersons={setPersons}
      />
    </div>
  )
}

export default App;