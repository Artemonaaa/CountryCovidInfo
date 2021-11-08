import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryItem from './CounryItem/CountryItem'
import './countriesList.css'

const Countrieslist = () => {
  const [countriesCovid, setCountriesCovid] = useState([])
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchCounties()
  }, [])
 
  async function fetchCounties() {
    try {
      const response = await axios.get('https://api.covid19api.com/summary')
      setCountriesCovid(response.data.Countries)
      setLoading(true)
    } catch (e) {
      alert(e)
    }
  }

  const filteredCountries = countriesCovid.filter(country => {
    return country.Country.toLowerCase().includes(value.toLowerCase())
  })
  
  return (
    <div>
        <input 
          type='text'
          placeholder='Search...'
          className='search'
          onChange={(event) => setValue(event.target.value)}
        />
        {loading ? 
          <div className='content'>
            <div style={{ backgroundColor: '#2196F3', color: 'white', cursor: 'auto' }} className='covid-item'>
              <h3 className='covid-item-indexSign'>№</h3>
              <h3 className='covid-item-country'>Country</h3>
              <h3 className='covid-item-totalConfirmed'>Total Confirmed</h3>
            </div>
            <div>
              {filteredCountries.map((country, index) => (
                <CountryItem key={country.ID} country={country} index={index} />
              ))}
            </div> 
          </div> 
        : 
          <h2>Bruh</h2>
        }
    </div>
  );
}

export default Countrieslist;
