import React, { useEffect } from 'react'

import Person from './Person'
import personService from '../services/persons'

const Persons = ({ persons, keyword, setPersons, setMessage }) => {

    useEffect(() => {
        personService
            .getAll().then(persons => {
            setPersons(persons)
            })
    }, [setPersons])

    const deletePerson = (person) => {
        if (window.confirm(`Delete ${person.name} ?`)){
            // console.log(person.id)
            personService
                .deletePerson(person.id)
                .then(response => {
                    setPersons(persons.filter(p => person.id !== p.id))
                    // console.log(response)
                }
            )
        }
    }

    return (
        <div>
            {persons
                .filter(person => person.name.toLowerCase().includes(keyword.toLowerCase()))
                .map(person => 
                <Person key={person.id}
                        person={person}
                        deletePerson={() => deletePerson(person)}
                />
            )}
        </div>
    )
}

export default Persons;