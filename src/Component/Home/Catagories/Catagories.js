import React, { useState } from 'react';
import CatagoryDetail from '../CatagoryDetail/CatagoryDetail';
import { useContext } from 'react';
import { CategoryContext } from '../../../App';
import { useEffect } from 'react';

const allProducts = [
    { name: 'lenevo', category: 'laptop' }, { name: 'asus', category: 'Laptop' }, { name: 'dell', category: 'laptop' },
    { name: 'samsung', category: 'mobile' }, { name: 'Nokia', category: 'mobile' }, { name: 'apple', category: 'mobile' },
    { name: 'Canon', category: 'Camera' }, { name: 'Nikkon', category: 'camera' }, { name: 'sony', category: 'camera' }
]

const Catagories = () => {
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // console.log(category);
        const matchedProducts = allProducts.filter(pd => pd.category.toLowerCase() === category && category.toLowerCase());
        setProducts(matchedProducts);
    }, [category])

    return (
        <div>
            <h3>Select a catagory: {category} </h3>
            {
                products.map(pd => <CatagoryDetail products={pd}></CatagoryDetail>)
            }
        </div>
    );
};

export default Catagories;