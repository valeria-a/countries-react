import './App.css';
import Layout from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import CountriesPage from './Countries/CountriesPage';
import CountryDetails from './Countries/CountryDetails';


function App() {
  return (

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="countries/" element={<CountriesPage />}>
              <Route path=":countryId/" element={ <CountryDetails />}/>
          </Route>
        </Route>
      </Routes>
  )
}

export default App;
