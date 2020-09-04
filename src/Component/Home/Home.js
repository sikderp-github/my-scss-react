import React, { useState, useContext } from 'react';
import Catagories from './Catagories/Catagories';
import { CategoryContext } from '../../App';

const Home = () => {
    const category = useContext(CategoryContext);
    return (
        <div style={{ border: '2px solid red', margin: '5px', padding: '5px' }}>
            <h2>This is Home :{category} </h2>
            <Catagories></Catagories>
        </div>
    );
};

export default Home;