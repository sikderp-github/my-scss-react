import React, { useContext } from 'react';
import { CategoryContext } from '../../../App';

const CatagoryDetail = (props) => {
    const { name } = props.products;

    return (
        <div>
            <h5>Selected category : {name}</h5>
        </div>
    );
};

export default CatagoryDetail;