import React from 'react'
import './Map.css'

const Map = () => {
  return (
    <>
    <div className="context">
    <div className='content'>
        <div style={{width:"800px"}}><iframe width="100%" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe></div>
    </div>
    </div>
    </>
  )
}

export default Map