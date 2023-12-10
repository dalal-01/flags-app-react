import React from 'react'

function CountryFlag({flag}) {
  return (
    <section className="col flag-section">
    <img
      src={flag}
      alt="belgium flag"
    />
    </section>
  )
}

export default CountryFlag