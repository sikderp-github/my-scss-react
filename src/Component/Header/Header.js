import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = () => {
    const [category, setCategory] = useContext(CategoryContext);

    return (
        <div style={{ border: '2px solid blue', margin: '5px', padding: '5px' }}>
            <h3>This is Header. {category}</h3>
            <button onClick={() => setCategory('laptop')}>laptop</button>
            <button onClick={() => setCategory('mobile')}>mobile</button>
            <button onClick={() => setCategory('camera')}>camera</button>
        </div>
    );
};

export default Header;