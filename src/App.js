import { BrowserRouter, Routes, Route } from "react-router-dom";
import Links from "./components/Links";
import ColorsPage from "./components/ColorsPage";
import CitiesPage from "./components/CitiesPage";
import './App.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Links />} />
          <Route path='/colorspage' element={<ColorsPage />} />
          <Route path='/citiespage' element={<CitiesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
