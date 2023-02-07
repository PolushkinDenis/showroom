import React, { useState, useEffect } from "react";
import './Shop.css'
import { collections } from "../../data/collections";
import ShopMain from "../../components/shopMain/ShopMain";
import { useLocation } from "react-router-dom";

const Shop = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [location]);

    return (
        <>
            <ShopMain />
        </>

    )
}

export default Shop