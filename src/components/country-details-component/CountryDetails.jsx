import React from 'react'
import Header from '../Header/Header.jsx'
import GoBack from './GoBack.jsx'
import "./country-details.css"
import CountryInfo from './country-info/CountryInfo.jsx'
function CountryDetails() {
  return (
    <>
    <Header/>
    <main className="px-4 px-md-5">
    <GoBack/>
    <CountryInfo/>
    </main>
    </>
  )
}

export default CountryDetails