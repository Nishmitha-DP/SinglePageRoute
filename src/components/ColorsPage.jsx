import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { colors } from '../global/DropDownListData';

function ColorsPage({selectedColor,setSelectedColor}) {


  const handleColorChange = (event) => {
    const color = event.target.value;
    setSelectedColor(color);
  };

  return (
    <div>
      <Link to='/citiespage'>Go to Cities Page</Link>
      <h1>Select a city</h1>
      <select value={selectedColor} onChange={handleColorChange}>
        <option>Select the color</option>
        {colors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ColorsPage;
