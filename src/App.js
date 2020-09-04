import React, { useState, createContext } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Shipment from './Component/Shipment/Shipment';

export const CategoryContext = createContext();

function App() {
  const [count, setCount] = useState('laptop', 'mobile', 'camera');
  return (
    <CategoryContext.Provider value={[count, setCount]}>
      <p>Count value : {count}</p>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </CategoryContext.Provider>
  );
}

export default App;
