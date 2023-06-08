import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cities } from '../global/DropDownListData';

function CitiesPage({selectedCity,setSelectedCity,selectedPlaces,setSelectedPlaces}) {


  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    setSelectedPlaces([]);
  };

  const handlePlaceChange = (event) => {
    const place = event.target.value;
    const isSelected = event.target.checked;

    if (isSelected) {
      setSelectedPlaces([...selectedPlaces, place]);
    } else {
      setSelectedPlaces(selectedPlaces.filter((p) => p !== place));
    }
  };

  return (
    <div>
      <Link to='/colorspage'>Go to Colors Page</Link>
      <h1>Select a city</h1>
      <select value={selectedCity} onChange={handleCityChange}>
        <option>Select the city</option>
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>

      {selectedCity && (
        <div>
          {cities
            .find((city) => city.name === selectedCity)
            .places.map((place) => (
              <div key={place}>
                  <input
                    type='checkbox'
                    value={place}
                    checked={selectedPlaces.includes(place)}
                    onChange={handlePlaceChange}
                  />
                  {place}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default CitiesPage;
