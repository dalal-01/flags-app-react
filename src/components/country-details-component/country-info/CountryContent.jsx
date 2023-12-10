import React from 'react'
import CountryInfoDetails from './CountryInfoDetails.jsx'
import BorderCountries from './BorderCountries.jsx'

function CountryContent() {
  return (
    <section className="col content-section  ">
     <h4 className="country-name mb-4 ">belgium</h4>
     <CountryInfoDetails/>
     <BorderCountries/>
    </section>
  )
}

export default CountryContent