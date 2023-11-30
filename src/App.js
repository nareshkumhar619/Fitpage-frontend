import React, { useState, useEffect, useContext } from 'react';
import { Mycontext } from './Componets/ContextApis';
import ItemList from './Componets/StockList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './Componets/Details';
import Params from './Componets/Params';
import Indicator from './Componets/Indicator';
 
function App() {
  const data = useContext(Mycontext)
  return (
    
  <div className='bg-gray-400 h-screen'> 
    <BrowserRouter>
   <Routes>
    <Route path="/" element={<ItemList/>} />
    <Route path="/:name" element={<Details/>}/>
    <Route path="/:name/:id" element={<Params/>}/>
    <Route path="/:name/indicator/:id" element={<Indicator/>}/>
   </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
