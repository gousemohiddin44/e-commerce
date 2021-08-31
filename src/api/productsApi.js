import { useEffect, useState } from "react";

function useProductsApi(){

    const [data,setData] = useState([]);
    const [error,setError] = useState(false);

    useEffect(()=>{
        async function fetchProducts(){
            const res = await fetch('https://fakestoreapi.com/products').catch((err)=> err);
            
            if(res.status === 404){
                setError(true);
            } else {
            const data = await res.json();
            setData(data);
            setError(false);
            }                   

        }

        fetchProducts();
    },[]);

    return [data,error];
       
};

export default useProductsApi;