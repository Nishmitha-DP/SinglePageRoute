import React from 'react'
import { Link } from 'react-router-dom'

function Links() {
    return (
        <div>
            <p><Link to='/colorspage'>Colors</Link></p>
            <p><Link to='/citiespage'>Cities</Link></p>
        </div>
    )
}

export default Links