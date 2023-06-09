import { Link } from 'react-router-dom';
import { cities } from '../global/DropDownListData';
import Heading from './Heading';
import DropDown from './DropDown';
import { useLocalStorage } from './UseLocalStorage';

function CitiesPage() {

  const [selectedCity, setSelectedCity] = useLocalStorage('selectedCity', '');
  const [selectedPlaces, setSelectedPlaces] = useLocalStorage('selectedPlaces', []);

  const cityNames = cities.map(city => city.name);
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
      console.log("here", selectedPlaces)
      setSelectedPlaces(selectedPlaces.filter((p) => p !== place));

    }
  };

  return (
    <div>
      <Link to='/colorspage'>Go to Colors Page</Link>
      <Heading value={'Select a City'} />
      <DropDown handleOptionChange={handleCityChange} selectedOption={selectedCity} options={cityNames} option={'City'} />

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
