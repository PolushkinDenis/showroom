import React, { useEffect } from "react";
import ClothersItem from "../../components/clothersItem/ClothersItem";
import { useLocation } from "react-router-dom";

const ShopItem = () => {
    const location = useLocation();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <ClothersItem />
        </>
    )
}

export default ShopItem