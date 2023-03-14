import './App.css';
import Layout from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import CountriesPage from './Countries/CountriesPage';
import CountryDetails from './Countries/CountryDetails';
import CountdownPage from './Countdown/CountdownPage';
import { useEffect, useState } from 'react';
import PollingJokes from './PollingJokes/PollingJokes';
import PollJokesAsyncAwait1 from './PollingJokes/PollJokesAsyncAwait1';
import PollJokesAsyncAwait2 from './PollingJokes/PollJokesAsyncAwait2';

import { useContext } from 'react';
import { CountdownContext } from './CountdownContext.js';


function App() {

  return (

    <CountdownContext.Provider value={10}>
      <Routes>
          <Route path="/" element={<Layout />}>
          
            <Route index element={<Home />} />
            <Route path="countries/" element={<CountriesPage />}>
                <Route path=":countryId/" element={ <CountryDetails />}/>
            </Route>
            <Route  path="countdown/" 
                    element={<CountdownPage />} 
            />
            <Route path="jokes/" element={<PollingJokes />}/>
            {/* <Route path="jokes/" element={<PollJokesAsyncAwait2 />}/> */}
          </Route>
        
      </Routes>
    </CountdownContext.Provider>
      
  )
}

export default App;
