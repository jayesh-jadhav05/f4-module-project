import React from 'react';
import './App.css';
import Home from './Components/Home'
import { Route,Routes } from 'react-router-dom';
import Item from './Components/Item';

  function App() {
  return (
    <Routes>
     <Route path='/' element={ <Home />}/>
     <Route path='/item/:id' element={<Item />}/>
    </Routes>
  );
}

export default App;
