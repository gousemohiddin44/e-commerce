import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import productApi from './api';
import Item from './Item';
import Loader from '../Loader';

const Product = () => {

    const productId = useSelector((state)=>state.getProduct.id);

    const [loading,setLoading] = useState(true);
    const [product,setProduct] = useState('');
    const [error,setError] = useState(false);

    useEffect(()=>{
        const fetchProduct = async (id) =>{

            const response = await productApi(id);
            
            if(response === 404){
                setError(true);
                setProduct(undefined);
                setLoading(false);
            } else {
                setProduct(response);
                setLoading(false);
            }
        }
        fetchProduct(productId);
    },[productId])

    return (
        <div>
            {loading ? <Loader /> : ( error? "404 page not found" : <Item product={product} />)}
        </div>
    )
}

export default Product
