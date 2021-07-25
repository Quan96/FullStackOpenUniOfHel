import Country from "./Country"

const Countries = ({ countries, setFilter, weather }) => {
    if (countries.length > 10) {
        return (
            <div>Too many matches, specify another filter</div>
        )
    }
    else if (countries.length > 1) {
        return (
            <div>
                {countries.map(country => 
                <div key={country.alpha2Code}>
                    {country.name}
                    <button onClick={() => setFilter(country.name)}>show</button>
                </div>
                )}
            </div>
        )
        
    }
    else if (countries.length === 1) {
        return (
            <Country country={countries[0]} weather={weather}/>
        )
    }
    else if (countries.length === 0) {
        return (
            <div></div>
        )
    }
}

export default Countries