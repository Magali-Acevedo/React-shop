import { useEffect,useState } from "react";
import axios from 'axios';

const useGetProducts = (API) => {
    const [products,setProducts]= useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const responde = await axios(API);
            setProducts(responde.data);
        };
        getProducts();
        
    }, [] );
    return products;
};

export default useGetProducts;