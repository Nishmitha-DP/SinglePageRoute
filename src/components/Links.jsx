import React from 'react'
import { Link } from 'react-router-dom'

function Links() {
    return (
        <div>
            <Link to='/colorspage'>Colors</Link>

            <Link to='/citiespage'>Cities</Link>
        </div>
    )
}

export default Links