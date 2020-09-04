import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const [category, setCategory] = useContext(CategoryContext)
    return (
        <div style={{ border: '2px solid green', margin: '5px', padding: '5px' }}>
            <h3>This is shipment </h3>
            <button onClick={() => setCategory(category + 1)}> Increment</button>
        </div>
    );
};

export default Shipment;