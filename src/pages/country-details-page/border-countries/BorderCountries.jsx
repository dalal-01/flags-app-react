import React from 'react'

function BorderCountries({borderCountries}) {
  return (
    
 <div className="border-countries pt-5 pb-4">
  <h5 className="d-block d-sm-inline-block pe-2 mb-3">
    border countries:
  </h5>
  {borderCountries && borderCountries.length > 0 ? (
        <>
          {borderCountries.map((border) => (
             <span  key={border} className="px-2 px-md-3 m-1 d-inline-block rounded-1 border-secondary">{border}</span>
          ))}
        </>
      ) : (
        <p>No border countries</p>
      )}

</div>

  )
}

export default BorderCountries