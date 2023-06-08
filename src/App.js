import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Links from "./components/Links";
import ColorsPage from "./components/ColorsPage";
import CitiesPage from "./components/CitiesPage";

function App() {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    const storedSelectedCity = localStorage.getItem('selectedCity');
    const storedSelectedPlaces = localStorage.getItem('selectedPlaces');
    const storedSelectedColor = localStorage.getItem('selectedColor');

    if (storedSelectedCity) setSelectedCity(storedSelectedCity);
    if (storedSelectedPlaces) setSelectedPlaces(storedSelectedPlaces);
    if (storedSelectedColor) setSelectedColor(storedSelectedColor);
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedCity', selectedCity);
    localStorage.setItem('selectedPlaces', selectedPlaces);
    localStorage.setItem('selectedColor', selectedColor);
  }, [selectedCity, selectedPlaces, selectedColor]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Links />} />
          <Route path='/colorspage' element={<ColorsPage selectedColor={selectedColor} setSelectedColor={setSelectedColor} />} />
          <Route path='/citiespage' element={<CitiesPage selectedCity={selectedCity} setSelectedCity={setSelectedCity} selectedPlaces={selectedPlaces} setSelectedPlaces={setSelectedPlaces} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
