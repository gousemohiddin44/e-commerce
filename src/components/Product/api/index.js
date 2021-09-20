const productApi = async (productId)=>{
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`).catch(err => err)

    if(res.status === 404){
        const data = 404;
        return data;
    } else {
        const data = await res.json();
        return data;
    }

}


export default productApi;