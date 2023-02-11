import React, { useEffect, useState } from "react";
import './Collection.css'
import { collections } from "../../data/collections";
import CollectionItem from "./CollectionItem";
import { useNavigate } from "react-router-dom";

const Collection = () => {
    const [view, setView] = useState([])
    const navige = useNavigate()

    const swipeImages = (e) => {
        console.log(e)
        if (e === 1 && collections.length !== view[2].id) {
            let newArrOfView = [...view]
            newArrOfView.shift()
            newArrOfView.push(collections[newArrOfView[1].id])
            setView(newArrOfView)
            // console.log(newArrOfView)
        }
        if (e === 0 && view[0].id !== 1) {
            let newArrOfView = [...view]
            newArrOfView.pop()
            console.log(newArrOfView)
            newArrOfView.unshift(collections[newArrOfView[0].id - 2])
            setView(newArrOfView)
            // console.log(newArrOfView)
        }

    }

    useEffect(() => {
        let arrOfView = []
        for (let i = 0; i < 3; i++) {
            arrOfView.push(collections[i])
        }
        setView(arrOfView)
    }, [])

    // console.log(view)

    return (
        <div className="collection content__collection">
            <h2>Новая коллекция</h2>
            <div className="collection__carousel">
                {view.map(product => (
                    <CollectionItem product={product} key={product.id} onClick={e => swipeImages(e)} first={view[0].id} end={view[2].id} />
                ))}
            </div>
            <div className="collection__button">
                <button onClick={() => navige("/showroom/shop")} className="collection__button-btn">Открыть магазин</button>
            </div>
        </div>
    )
}

export default Collection