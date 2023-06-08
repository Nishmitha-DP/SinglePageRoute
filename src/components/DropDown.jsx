import React from 'react'

function DropDown({ handleOptionChange, selectedOption, options, option }) {
    return (
        <div>
            <select value={selectedOption} onChange={handleOptionChange}>
                <option>Select the {option}</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
           
        </div>
    )
}

export default DropDown