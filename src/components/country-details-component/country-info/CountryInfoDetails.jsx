import React from 'react'

function CountryInfoDetails() {
  return (
   <div className="country-details d-flex flex-column flex-sm-row justify-content-between gap-5">
  <div className="left-side">
    <div>native name: <span className="fw-light">belgië</span></div>
    <div>population: <span className="fw-light">11,319,511</span></div>
    <div>region: <span className="fw-light">Europe</span></div>
    <div>
      sub region: <span className="fw-light">westren eroup</span>
    </div>
    <div>capital: <span className="fw-light">brussels</span></div>
  </div>
  <div className="right-side">
    <div>top level domain: <span className="fw-light">.be</span></div>
    <div>currencies: <span className="fw-light">euro</span></div>
    <div>
      languages:
      <span className="fw-light">dutch, french, germany</span>
    </div>
  </div>
</div>

  )
}

export default CountryInfoDetails