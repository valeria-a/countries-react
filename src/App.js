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

import { CountdownContext } from './CountdownContext.js';



function App() {

  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
      if (timeLeft === 0) {
        return
      }
      console.log('setting timer', timeLeft)
      const timerId = setTimeout(() => {
          setTimeLeft((t) => t - 1)
    }, 1000);
  
  // we have to provide clean-up function to stop interval/timer!
    return () => {
      console.log('calling clearTimeout for timerId', timerId)
      clearTimeout(timerId)
    };
  }, [timeLeft]); 


  const startCountdown = (seconds) => {
    setTimeLeft(seconds)
  }

  return (

    <CountdownContext.Provider value={{timeLeft, startCountdown}}>
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
