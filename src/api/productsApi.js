import { useEffect, useState } from "react";

function useProductsApi(){

    const [data,setData] = useState([]);
    const [error,setError] = useState(false);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        async function fetchProducts(){
            const res = await fetch('https://fakestoreapi.com/products').catch((err)=> err);
            
            if(res.status === 404){
                setError(true);
                setLoading(false);
            } else {
            const data = await res.json();
            setData(data);
            setError(false);
            setLoading(false);
            }                   

        }

        fetchProducts();
    },[]);

    return [data,error,loading];
       
};

export default useProductsApi;