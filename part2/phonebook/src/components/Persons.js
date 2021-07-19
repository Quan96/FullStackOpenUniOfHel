const Persons = ({ persons, keyword }) => {
    return (
        persons.filter(person => person.show === true)
        .map(person => <p key={person.name}>{person.name} {person.number} </p>)
    )
}

export default Persons;