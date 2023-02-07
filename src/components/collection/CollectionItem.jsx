import React from "react";
import './Collection.css'

const CollectionItem = (products) => {

    const { product, onClick, first, end } = { ...products }

    // console.log(product)
    // console.log(first)
    // console.log(end)

    const prevImage = () => {
        onClick(0)
    }

    const nextImage = () => {
        onClick(1)
    }

    return (
        <div className="colletionItem">
            {product.id === first ? (
                <div className="colletionItem__next">
                    <img className="colletionItem__prev-img" src={product.img} alt={product.title} onClick={prevImage}></img>
                </div>
            ) : (product.id === end ? (
                <div className="colletionItem__next">
                    <img className="colletionItem__next-img" src={product.img} alt={product.title} onClick={nextImage}></img>
                    {/* <div className="arrov">&rarr;</div>	 */}
                </div>
            ) : (
                <div className="colletionItem__next">
                    <img src={product.img} alt={product.title} ></img>
                </div>
            ))}
            <p className="colletionItem__title">{product.title}</p>
            <div className="colletionItem__price">
                <p className="price-old">{product.oldPrice}</p>
                <p className="price">{product.price}</p>
            </div>
        </div>
    )
}

export default CollectionItem