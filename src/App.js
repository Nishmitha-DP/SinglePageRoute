import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ColorsPage from './components/ColorsPage';
import CitiesPage from './components/CitiesPage';
import Links from './components/Links';

function App() {

  const [selectedCity, setSelectedCity] = useState('');
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');

  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Links/>}/>
      <Route path='/colorspage' element={<ColorsPage selectedColor={selectedColor} setSelectedColor={setSelectedColor}/>}/>
      <Route path='/citiespage' element={<CitiesPage selectedCity={selectedCity} setSelectedCity={setSelectedCity} selectedPlaces={selectedPlaces} setSelectedPlaces={setSelectedPlaces}/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;