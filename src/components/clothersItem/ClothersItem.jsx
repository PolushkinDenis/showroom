import React, { useState } from "react";
import './ClothersItem.css'
import { collections } from "../../data/collections";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addClother } from "../../store/cardSlice";


const ClothersItem = () => {
    const state = useLocation().state
    const [sizeSelected, setSizeSelected] = useState("")
    const [colorSelected, setColorSelected] = useState("")
    const [count, setCount] = useState(1)
    const dispatch = useDispatch()
    const states = useSelector(states => states.card.clothes)

    console.log(states)

    const checkCount = (e) => {        
        if(/^\d+$/.test(e.target.value) && e.target.value != 0){
            setCount(e.target.value)
        }
        else {
            setCount(1) 
        }
    }

    const addToCard = () => {
        console.log("ADD")
        let cardItem = {
            id: state.id + state.title + colorSelected + sizeSelected + state.price,
            title: state.title,
            img: state.img,
            price: state.price,
            color: colorSelected,
            size: sizeSelected,
            count
        }
        dispatch(addClother(cardItem))

    }

    // console.log(colorSelected)
    // console.log(count)
    // console.log(sizeSelected)

    return (
        <div className="clothersItem">
            <h1>{state.title}</h1>
            <div className="clothersItem__links">
                <pre className="clothersItem__links-p">
                    <p className="link__main">Главная — {state.typeRu} — </p>
                    <p className="link__secondary">{state.title}</p>
                </pre>
            </div>
            <div className="clothersItem__content">
                <div className="clothersItem__content-image">
                    <img src={state.img}></img>
                </div>
                <div className="clothersItem__content-settings">
                    <div className="settings__price">
                        <p className="settings__price-main">{state.price}</p>
                        <p className="settings__price-old">{state.oldPrice}</p>
                    </div>
                    <p className="select__size">Выберите размер</p>
                    <div>
                        {state.size.map((size) => (
                            <button className={sizeSelected === size ? 'size selected-size' : 'size'} onClick={() => setSizeSelected(size)} key={size}>{size}</button>
                        ))}
                    </div>
                    <p className="select__color">Выберите цвет</p>
                    <div className="colors">
                        {state.color.map((color) => (
                            <button style={{backgroundColor: color}} className={color === colorSelected ? 'selected-color color' : 'color'} onClick={() => setColorSelected(color)} key={color}></button>
                        ))}
                    </div>
                    <div className="addBasket">
                        <input className="input__count" type="text" value={count} onChange={checkCount}></input>
                        <button disabled={!(colorSelected && sizeSelected)} className="btn__add" onClick={addToCard}>Добавить в корзину</button>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default ClothersItem