import Weather from './Weather'

const Country = ({ country }) => {
    return (
    <div>
        <h2>{country.name}</h2>
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>
        <h2>Spoken languages</h2>
        <ul>{country.languages.map((language) => {
            return (
                <li key={language.iso639_1}>{language.name}</li>)
            })}
        </ul>
        <img src={country.flag} alt="flag" width="120"></img>
        <Weather capital={country.capital} />
    </div>
    )
}

export default Country