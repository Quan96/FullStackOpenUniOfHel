import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ filter, setFilter ] = useState('')
  
  const handleNewFilter = (event) => {
    setFilter(event.target.value)
  }

  const getCountries = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log(response.data)
        setCountries(response.data)
      })
  }

  const filterCountries = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))
  // console.log(filterCountries)

  useEffect(getCountries, [])

  return (
    <div className="Countries">
      <form>
        find countries <input
         value={filter}
         onChange={handleNewFilter}>
        </input>
      </form>
      <Countries 
        countries={filterCountries} 
        setFilter={setFilter} 
      >
      </Countries>
    </div>
  );
}

export default App;
