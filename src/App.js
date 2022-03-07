import React from 'react';
import Home from './comp/Home'
import Authantication from './comp/Authantication'
import {BrowserRouter as Routre, Routes,Route} from 'react-router-dom'; 
import Blackjack from './comp/Blackjack/Blackjack.tsx';

function App() {
  return (          
    <>
      <Routre>
        <Routes>
          <Route exact path='/' element={<Authantication/>} />
          <Route exact path='/home' element={<Home/>} />
        </Routes>
      </Routre>
    </>
  );
}

export default App;