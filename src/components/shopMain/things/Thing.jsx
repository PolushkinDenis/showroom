import React from "react";
import { NavLink } from "react-router-dom";
import './Things.css'

const Thing = ({ collection }) => {

    return (
        <NavLink to={`/showroom/shop/${collection.id}`} state={collection} className="thing__card">
            <div className="thing__next">
                <img src={collection.img} alt={collection.title} ></img>
            </div>

            <p className="thing__title">{collection.title}</p>
            <div className="thing__price">
                <p className="price-old">{collection.oldPrice}</p>
                <p className="price">{collection.price}</p>
            </div>
        </NavLink>
    )
}

export default Thing