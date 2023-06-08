import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { colors } from '../global/DropDownListData';
import Heading from './Heading';
import DropDown from './DropDown';

function ColorsPage({selectedColor,setSelectedColor}) {


  const handleColorChange = (event) => {
    const color = event.target.value;
    setSelectedColor(color);
  };

  return (
    <div>
      <Link to='/citiespage'>Go to Cities Page</Link>
      <Heading value={'Select a color'}/>
      <DropDown handleOptionChange={handleColorChange} selectedOption={selectedColor} options={colors} option={'Color'}/>
    </div>
  );
}

export default ColorsPage;

